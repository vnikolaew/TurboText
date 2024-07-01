#!/bin/bash

cd ../../ && npx turbo db:push && npx turbo db:generate && cd apps/web && npm run build