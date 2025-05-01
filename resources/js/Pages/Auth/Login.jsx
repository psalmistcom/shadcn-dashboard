import InputError from "@/Components/InputError";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";
import { cn } from "@/lib/utils";
import { Head, Link, useForm } from "@inertiajs/react";
import RightGuestAuthImage from "./RightGuestAuthImage";

export default function Login({
    status,
    canResetPassword,
    className,
    ...props
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestAuthLayout>
            <Head title="Log in" />
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                <Card className="overflow-hidden">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit} className="p-6 md:p-8">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">
                                        Welcome back
                                    </h1>
                                    <p className="text-balance text-muted-foreground">
                                        Login to your Acme Inc account
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        name="email"
                                        value={data.email}
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <Link
                                            href={route("password.request")}
                                            className="ml-auto text-sm underline-offset-2 hover:underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={processing}
                                >
                                    Login
                                </Button>

                                <div className="text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        href={route("register")}
                                        className="underline underline-offset-4"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </form>
                        <RightGuestAuthImage />
                    </CardContent>
                </Card>
            </div>
        </GuestAuthLayout>
    );
}
