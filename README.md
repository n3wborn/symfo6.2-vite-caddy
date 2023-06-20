# Symfony 6.2 Vite Caddy

![CI](https://github.com/n3wborn/symfo6.2-vite-caddy/workflows/CI/badge.svg)

1. What ?

    - Symfony 6.2 based on [Symfony Docker](https://github.com/dunglas/symfony-docker)

2. Why ?

    - to replace my previous apache/nginx by Caddy for Symfony projects
    - to add a Node container to Symfony Docker
    - to replace Webpack Encore by Vite (using "pentatrion/vite-bundle")
    - to have a light/fast asset/template builder with HMR
    - to have something ready for dev and prod
    - to play and learn !
    - and surely more I don't think of right now

## Install

```sh
clone https://github.com/n3wborn/symfo6.2-vite-caddy
cd symfo6.2-vite-caddy
make build && make up
```

For HTTPS to be fully operational **you need to accept certificates on "both sides"**.

1. Go to the main url of the project (https://symfo.localhost/) and accept certificate
2. Got to the url used by vite (https://node.symfo.localhost:5173/) and accept certificate

Or, simply follow [TLS certificates](docs/tls.md) doc:

```bash
# Mac
$ docker cp $(docker compose ps -q caddy):/data/caddy/pki/authorities/local/root.crt /tmp/root.crt && sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /tmp/root.crt
# Linux
$ docker cp $(docker compose ps -q caddy):/data/caddy/pki/authorities/local/root.crt /usr/local/share/ca-certificates/root.crt && sudo update-ca-certificates
# Windows
$ docker compose cp caddy:/data/caddy/pki/authorities/local/root.crt %TEMP%/root.crt && certutil -addstore -f "ROOT" %TEMP%/root.crt
```

Now everything should be fine

## Symfony Docker Docs

(Keep in mind those can be incompatible with this repo)

1. [Build options](docs/build.md)
2. [Using Symfony Docker with an existing project](docs/existing-project.md)
3. [Support for extra services](docs/extra-services.md)
4. [Deploying in production](docs/production.md)
5. [Debugging with Xdebug](docs/xdebug.md)
6. [TLS Certificates](docs/tls.md)
7. [Using a Makefile](docs/makefile.md)
8. [Troubleshooting](docs/troubleshooting.md)

## License

Symfony Docker is available under the MIT License.

## Credits

Symfony Docker is created by [Kévin Dunglas](https://dunglas.fr), co-maintained by [Maxime Helias](https://twitter.com/maxhelias) and sponsored by [Les-Tilleuls.coop](https://les-tilleuls.coop).
