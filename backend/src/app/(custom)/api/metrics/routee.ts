import { register, collectDefaultMetrics, Histogram } from 'prom-client'

collectDefaultMetrics()

const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.05, 0.1, 0.2, 0.5, 1, 2, 5],
})
register.registerMetric(httpRequestDuration)

export default async function handler(req: any, res: any) {
  res.setHeader('Content-Type', register.contentType)
  res.send(await register.metrics())
}
