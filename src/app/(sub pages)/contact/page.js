import Forms from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-white font-bold text-center text-6xl capitalize mb-14">
            Get in touch..
          </h1>
        </div>
        <Forms />
      </article>
    </>
  );
}
