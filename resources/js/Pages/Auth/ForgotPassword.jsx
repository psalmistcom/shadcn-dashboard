import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";
import { cn } from "@/lib/utils";
import { Head, useForm } from "@inertiajs/react";
import RightGuestAuthImage from "./RightGuestAuthImage";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestAuthLayout>
            <Head title="Forgot Password" />
            <div className={cn("flex flex-col gap-6")}>
                <Card className="overflow-hidden">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        <div className="p-6 md:p-8">
                            <div className="text-sm text-gray-600 ">
                                Forgot your password? No problem. Just let us
                                know your email address and we will email you a
                                password reset link that will allow you to
                                choose a new one.
                            </div>
                            {status && (
                                <div className="py-2 text-sm font-medium text-green-600">
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit} className="">
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />

                                <div className="mt-4 flex items-center justify-center">
                                    <Button
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Email Password Reset Link
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <RightGuestAuthImage />
                    </CardContent>
                </Card>
            </div>
        </GuestAuthLayout>
    );
}
