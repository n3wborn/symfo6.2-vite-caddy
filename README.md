# Symfony 6.2 Vite Caddy


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
