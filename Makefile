#
# Tasks
#
# - start   :: starts application using forever
# - stop    :: stops application using forever
#

# This set's your local directory to to your NODE_PATH
NODE_EXEC    = NODE_PATH=.:$(NODE_PATH)

# This is for local (non `-g`) npm installs.
#NODE_MODS    = ./node_modules/.bin/

# Some good `talends` options.
FOREVER_OPTS = -p ./logs  \
		-l server_log.log \
		-o ./logs/server_out.log \
		-e ./logs/server_err.log \
		--append \
		--plain \
		--minUptime 1000 \
		--spinSleepTime 1000

start: setup/dirs
  # starting apps in server mode
	sudo forever stopall
	mkdir -p logs pids && sudo TZ=utc forever $(FOREVER_OPTS) start app.js

stop:
	# stopping all apps
	sudo forever stopall

setup/dirs:
	# creating required directories for `forever`
	mkdir -p logs pids



