#!/bin/bash

cd ../../ && npx turbo db:generate && cd apps/web && npm run build