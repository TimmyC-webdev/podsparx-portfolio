import { useEffect } from "react";
import { FaApple, FaPlay, FaStar } from "react-icons/fa";

export default function PugletLanding() {
  useEffect(() => {
    document.title = "Puglet | Fun Math Practice for Kids Ages 5–7";

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setPropertyMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Fun math app for kids ages 5–7. Play levels, unlock rewards, and choose Puglet’s next adventure."
    );

    setPropertyMeta("og:title", "Puglet – Fun Math for Kids");
    setPropertyMeta(
      "og:description",
      "Play, learn, and choose what happens next with Puglet."
    );
    setPropertyMeta("og:image", "https://www.podsparx.com/og-image.jpg");
    setPropertyMeta("og:type", "website");
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-base-100 text-base-content">
      <section className="relative isolate min-h-[88vh]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(111,255,76,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(146,95,255,0.12),transparent_26%),linear-gradient(to_bottom,rgba(255,255,255,0.98),rgba(245,243,255,1))]" />

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-6 lg:px-10 lg:py-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/85 px-4 py-2 text-sm shadow-sm">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
                Educational math adventures for ages 5–7
              </div>

              <h1 className="text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                Meet <span className="text-primary">Puglet</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-base-content/75 sm:text-xl">
                Kids build confidence through short levels, rewards, and fun
                adventure clips starring Puglet.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://apps.apple.com/gb/app/puglet/id6761605649"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg h-14 min-h-14 rounded-full px-8 text-base font-bold shadow-lg shadow-primary/20"
                >
                  <FaApple className="text-xl text-gray-900" />
                  Download on the App Store
                </a>

                <a
                  href="#how-it-works"
                  className="btn btn-outline btn-lg h-14 min-h-14 rounded-full px-8 text-base font-bold"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-3xl border p-4 text-center">
                  <p className="text-2xl font-black text-primary">10</p>
                  <p className="text-sm text-base-content/70">Levels</p>
                </div>
                <div className="rounded-3xl border p-4 text-center">
                  <p className="text-2xl font-black text-primary">10</p>
                  <p className="text-sm text-base-content/70">Questions</p>
                </div>
                <div className="rounded-3xl border p-4 text-center">
                  <p className="text-2xl font-black text-primary">6+</p>
                  <p className="text-sm text-base-content/70">Unlock rewards</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[520px] rounded-[2.5rem] bg-white p-4 shadow-xl">
                <div className="aspect-square w-full overflow-hidden rounded-[2rem]">
                  <img
                    src="/puglet-icon.png"
                    alt="Puglet"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-4 rounded-[2rem] border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-black text-lg">Puglet’s adventure reward</p>
                      <p className="text-sm text-base-content/60">
                        Kids decide what happens next.
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      <FaPlay />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-full bg-fuchsia-500 py-3 text-center text-white font-bold">
                      Choose pink
                    </div>
                    <div className="rounded-full bg-green-400 py-3 text-center text-white font-bold">
                      Choose green
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              A simple, playful learning routine children actually enjoy.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaStar />
              </div>
              <h3 className="text-xl font-black">Practice through levels</h3>
              <p className="mt-3 leading-7 text-base-content/70">
                Children work through 10 fun levels with 10 questions in each one,
                building confidence step by step.
              </p>
            </article>

            <article className="rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(72%_0.24_145_/_0.12)] text-[oklch(58%_0.22_145)]">
                <FaPlay />
              </div>
              <h3 className="text-xl font-black">Unlock Puglet rewards</h3>
              <p className="mt-3 leading-7 text-base-content/70">
                Score 6 or more correct answers and unlock a cheerful Puglet
                adventure clip as a reward.
              </p>
            </article>

            <article className="rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                <span className="text-lg font-black">↔</span>
              </div>
              <h3 className="text-xl font-black">Choose what happens next</h3>
              <p className="mt-3 leading-7 text-base-content/70">
                Some adventures include branching moments where kids choose pink
                or green and decide Puglet’s next path.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[linear-gradient(135deg,oklch(58%_0.233_277.117),oklch(72%_0.24_145))] p-10 text-center text-white">
          <h2 className="text-3xl font-black">
            Help your child enjoy learning math
          </h2>

          <a
            href="https://apps.apple.com/gb/app/puglet/id6761605649"
            target="_blank"
            rel="noreferrer"
            className="btn mt-6 h-14 min-h-14 rounded-full border-0 bg-white px-8 text-base font-bold text-gray-900 shadow-xl hover:bg-white"
          >
            <FaApple className="text-xl text-gray-900" />
            Get Puglet
          </a>
        </div>
      </section>
    </main>
  );
}