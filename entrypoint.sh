#!/bin/sh
set -e

cat > /app/dist/config.js << EOF
window.__env__ = {
  ORDER_URL: "${VITE_API_ORDER_URL:-http://localhost:3000}",
  INVENTORY_URL: "${VITE_API_INVENTORY_URL:-http://localhost:3001}",
  NOTIFICATION_URL: "${VITE_API_NOTIFICATION_URL:-http://localhost:3002}"
};
EOF

exec serve -s dist -l 80
