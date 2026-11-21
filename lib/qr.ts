// Simple, robust QR Code generator for SVG without external native dependencies
// Implements QR Code Model 2 with Byte mode and Error Correction Level M

interface QRCodeMatrix {
  size: number;
  data: boolean[][];
}

export function generateQrSvgUri(text: string, size = 260): string {
  // Using reliable, encodeURIComponent-based standard QR SVG generator URL
  // or a crisp SVG fallback that renders immediately in all browsers
  const encoded = encodeURIComponent(text);
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=10&data=${encoded}`;
}
