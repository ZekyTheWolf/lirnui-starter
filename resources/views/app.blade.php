<!DOCTYPE html>
<html class="dark">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        @vite([
            'resources/scripts/main.tsx',
        ])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>