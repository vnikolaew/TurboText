#!/bin/bash

cd ../../ && npx turbo db:push && cd apps/web && npm run build