import React from "react";
import { Card, CardFooter, Image, Button, CardBody, Slider } from "@nextui-org/react";
import { Head } from "@inertiajs/react";
import { Code } from "@nextui-org/react";
import { InertiaLink, InertiaLinkButton } from "@Components/InertiaLink";

export default function Welcome({ lirnui }: { lirnui: any })
{
    const arrayOfLinks = [
        { title: 'Laravel',         href: 'https://laravel.com/docs/'   },
        { title: 'InertiaJS',       href: 'https://inertiajs.com'       },
        { title: 'NextUI',          href: 'https://nextui.org/'         },
        { title: 'TypeScript',      href: 'https://typescriptlang.org/' }
    ];

    return (<>
        <Head>
            <title>{lirnui}</title>
        </Head>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="text-center">
                <div className="mx-auto max-w-screen-sm text-center">
			    	<h1
			    		className="text-primary-500 mb-8 text-2xl font-extrabold tracking-tight lg:text-4xl"
			    	>
                        {lirnui}
			    	</h1>
			    </div>
                <div className="grid grid-cols-1 content-center gap-4 sm:grid-cols-4 h-[300px]">
                    {arrayOfLinks.map((link: any) => (
                        <Card key={link.title}>
                            <CardBody className="p-8 mb-2 text-center justify-between py-1 before:rounded-xl rounded-large">
                                <p className="text-white/80 text-center text-2xl p-2">
                                    {link.title}
                                </p>
                                <Button
                                    onClick={() => window.location.href = link.href}
                                    color="default"
                                    radius="sm"
                                    size="sm"
                                >
                                    Docs
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-12">
                                <Code>
                                    {`import { InertiaLink, InertiaLinkButton } from "@Components/InertiaLink"`}
                                </Code>
                                <div className="p-2"></div>
                                <Code>
                                    {`<InertiaLink href="/your/route">Some label</InertiaLink>`}
                                </Code>
                                <div className="p-2"></div>
                                <Code>
                                    {`<InertiaLinkButton href="/your/route">Some label</InertiaLinkButton>`}
                                </Code>
                                <div className="p-2"></div>
                                <InertiaLink href="/secret">Secret Link</InertiaLink>

                                <div className="p-2"></div>
                                <InertiaLinkButton href="/secret-button">Secret Button Link</InertiaLinkButton>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    </>);
}