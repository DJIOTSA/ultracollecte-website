import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'UltraCollecte Mockup'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f3f4f6',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '384px',
            height: '600px',
            transform: 'rotate(3deg)',
            borderRadius: '3rem',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
            background: 'linear-gradient(to bottom right, #1f2937, #374151)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '8px',
              background: 'white',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'sans-serif',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <div
                  style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }}
                />
                <div
                  style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }}
                />
                <div
                  style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }}
                />
              </div>
              <div style={{ fontSize: 14, color: '#4b5563', fontWeight: 500 }}>UltraCollecte</div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '24px',
                alignItems: 'center',
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 'bold', color: '#111827' }}>
                Dernières collectes (8)
              </h3>
              <div
                style={{
                  fontSize: 14,
                  background: '#e0f2fe',
                  color: '#0369a1',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontWeight: 500,
                }}
              >
                Ce mois
              </div>
            </div>

            {[
              ['Siméon', '16/06 10:54', '10 000 FCFA', '#e0f2fe', '#0369a1'],
              ['Blaise', '16/06 10:54', '13 000 FCFA', '#fef9c3', '#ca8a04'],
              ['Jean Olivier', '16/06 10:52', '600 FCFA', '#fce7f3', '#db2777'],
              ['Siméon', '16/06 10:21', '10 000 FCFA', '#e0f2fe', '#0369a1'],
              ['Gabriel', '16/06 10:21', '10 000 FCFA', '#cffafe', '#0891b2'],
            ].map(([name, date, amount, bgColor, iconColor], i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  background: '#f9fafb',
                  borderRadius: '1rem',
                  marginBottom: '12px',
                }}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: bgColor,
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    💳
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#111827' }}>{name}</div>
                    <div style={{ fontSize: 12, color: '#6b7280' }}>📅 {date}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: 12,
                        background: '#e5e7eb',
                        color: '#4b5563',
                        padding: '2px 6px',
                        borderRadius: '9999px',
                      }}
                    >
                      XAF
                    </span>
                    <span style={{ fontWeight: 'bold', color: '#111827' }}>{amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
