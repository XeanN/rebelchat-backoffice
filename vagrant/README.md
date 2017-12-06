# Vagrant Local Development
Vagrant project for development and testing.

## Getting started

- Install [vagrant](https://www.vagrantup.com/docs/installation/) and [VirtualBox](https://www.virtualbox.org/manual/ch02.html) on your machine
- Locate to `rebelchat-backoffice/vagrant` directory
- execute: `$ vagrant up`

The first build may take a few minutes but subsequent runs will be much faster.

Once the box is up and provisioned you can access the database at `localhost:5432`.

## Login in to the vagrant
You can access the VM by running `$ vagrant ssh` from the vagrant directory of the project. You will be logged in to the VM as the `vagrant` user.

```sh vagrant@dbdash:~$ ls rebelchat-backoffice ```


TODO: bootstrap dependency installation for the application
