export enum CacheFilename {
  Gzip = 'cache.tgz',
  Zstd = 'cache.tzst'
}

export enum CompressionMethod {
  Gzip = 'gzip',
  // Long range mode was added to zstd in v1.3.2.
  // This enum is for earlier version of zstd that does not have --long support
  ZstdWithoutLong = 'zstd-without-long',
  Zstd = 'zstd'
}

export enum ArchiveToolType {
  GNU = 'gnu',
  BSD = 'bsd'
}

// The default number of retry attempts.
export const DefaultRetryAttempts = 2

// The default delay in milliseconds between retry attempts.
export const DefaultRetryDelay = 5000

// Socket timeout in milliseconds during download.  If no traffic is received
// over the socket during this period, the socket is destroyed and the download
// is aborted.
export const SocketTimeout = 5000

// The default path of GNUtar on hosted Windows runners
export const GnuTarPathOnWindows = `${process.env['PROGRAMFILES']}\\Git\\usr\\bin\\tar.exe`

// The default path of BSDtar on hosted Windows runners
export const SystemTarPathOnWindows = `${process.env['SYSTEMDRIVE']}\\Windows\\System32\\tar.exe`

export const TarFilename = 'cache.tar'

export const ManifestFilename = 'manifest.txt'

export const CacheFileSizeLimit = 10 * Math.pow(1024, 3) // 10GiB per repository
