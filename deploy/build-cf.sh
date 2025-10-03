#! /bin/bash

MAX_ATTEMPTS=3
SLEEP_SECONDS=20
attempt=1
exit_code=0

while [ $attempt -le $MAX_ATTEMPTS ]; do
	echo "[build-cf.sh] Attempt $attempt of $MAX_ATTEMPTS..."
	npm run generate
	exit_code=$?
	if [ $exit_code -eq 0 ]; then
		echo "[build-cf.sh] Succeeded on attempt $attempt."
		break
	fi
	if [ $attempt -lt $MAX_ATTEMPTS ]; then
		echo "[build-cf.sh] Failed with exit code $exit_code. Retrying in ${SLEEP_SECONDS}s..."
		sleep $SLEEP_SECONDS
	else
		echo "[build-cf.sh] Failed on final attempt ($attempt) with exit code $exit_code."
	fi
	attempt=$((attempt + 1))
done

if [ $exit_code -eq 0 ]; then
	cp -r dist website
fi

exit $exit_code
