export const ADMIN_SESSION_COOKIE = 'zanzibaba_admin_session'
const SESSION_DURATION_SECONDS = 60 * 60 * 8

function toBase64Url(bytes: Uint8Array) {
  let binary = ''
  bytes.forEach((byte) => { binary += String.fromCharCode(byte) })
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function signatureFor(expiresAt: string, secret: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(expiresAt))
  return toBase64Url(new Uint8Array(signature))
}

export async function createAdminSession(secret: string) {
  const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS)
  return `${expiresAt}.${await signatureFor(expiresAt, secret)}`
}

export async function verifyAdminSession(token: string | undefined, secret: string | undefined) {
  if (!token || !secret) return false
  const [expiresAt, suppliedSignature, ...extra] = token.split('.')
  if (!expiresAt || !suppliedSignature || extra.length > 0) return false
  if (!/^\d+$/.test(expiresAt) || Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false

  const expectedSignature = await signatureFor(expiresAt, secret)
  if (expectedSignature.length !== suppliedSignature.length) return false

  let difference = 0
  for (let index = 0; index < expectedSignature.length; index += 1) {
    difference |= expectedSignature.charCodeAt(index) ^ suppliedSignature.charCodeAt(index)
  }
  return difference === 0
}

export const adminSessionMaxAge = SESSION_DURATION_SECONDS
