export default function RightGuestAuthImage() {
    return (
        <div className="relative hidden bg-muted md:block">
            <img
                src="/placeholder.svg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    );
}
