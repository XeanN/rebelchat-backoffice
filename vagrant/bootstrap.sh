#!/bin/bash -e
set -a
SCRIPTS_DIR=${SCRIPTS_DIR:-'scripts/'}
LOG=/vagrant/tmp/log/boot.log
set +a

mkdir -p $(dirname $LOG)

NODE_VER=${NODE_VER:-8.x}

chown vagrant /etc/hosts
echo "127.0.0.1   $FQDN" >> /etc/hosts

display() {
	echo -e "\n-----> "$0": "$*
}

print_db_usage () {
  echo "Your Postgres environment version $PGVERSION has been setup"
  echo "  Host:  $FQDN"
  echo ""
  echo "  Port: $PORT"
  echo "  Forward to: $FPORT"
  echo ""
  echo " Getting into the box (terminal):"
  echo "  vagrant ssh"
  echo ""
}

(
export DEBIAN_FRONTEND=noninteractive

PROVISIONED_ON=/etc/vm_provision_on_timestamp
#if [ -f "$PROVISIONED_ON" ]
#then
#  echo "VM was already provisioned at: $(cat $PROVISIONED_ON)"
#  echo "To run system updates manually login via 'vagrant ssh' and run 'apt-get update && apt-get upgrade'"
#  echo ""
#  print_db_usage
#  exit
#`fi

display Installing node
apt update
apt install build-essential -y
curl -sL "https://deb.nodesource.com/setup_$NODE_VER" | sudo -E bash -
sudo apt-get install -y nodejs
# npm needs to be latest version
npm install npm@latest -g

display Installing jq
apt-get -y install jq


# Update Apt repos
sudo apt-get update

#install openssl dependency
apt-get -y install libssl-dev



# Tag the provision time:
date > "$PROVISIONED_ON"

display "Successfully created dev virtual machine"
echo ""
print_db_usage

exit 0

) 2>&1 | tee -a $LOG