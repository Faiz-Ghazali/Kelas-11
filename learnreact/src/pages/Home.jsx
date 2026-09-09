function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.2),transparent_35%)]" />
        <div className="relative w-full px-6 pb-20 pt-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400 text-slate-950">
                L
              </span>
              Learnify
            </a>
            <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#courses" className="transition hover:text-white">
                Courses
              </a>
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#about" className="transition hover:text-white">
                About us
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#login"
                className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block"
              >
                Log in
              </a>
              <a
                href="#get-started"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Get started
              </a>
            </div>
          </nav>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" /> Learn
                without limits
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                Build skills that move your future forward.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Practical courses, expert guidance, and a learning community
                designed to help you grow with confidence—one lesson at a time.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#courses"
                  className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
                >
                  Explore courses <span className="ml-2">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500"
                >
                  How it works
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-slate-950 bg-amber-200 text-xs">
                    AJ
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-slate-950 bg-rose-200 text-xs">
                    MS
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-slate-950 bg-violet-200 text-xs">
                    RK
                  </span>
                </div>
                <span>
                  <strong className="text-white">12,000+</strong> learners
                  growing every day
                </span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-2xl bg-white p-5 text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">
                        Your learning progress
                      </p>
                      <h2 className="mt-1 text-xl font-bold">This week</h2>
                    </div>
                    <span className="rounded-lg bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                      +24%
                    </span>
                  </div>
                  <div className="mt-8 flex h-32 items-end justify-between gap-2">
                    {[38, 55, 44, 72, 62, 88, 76].map((height, index) => (
                      <div key={index} className="flex h-full flex-1 items-end">
                        <div
                          style={{ height: `${height}%` }}
                          className={`w-full rounded-t-lg ${index === 5 ? "bg-cyan-400" : "bg-slate-100"}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-slate-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-900 p-4 text-white">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-400/20 text-xl">
                    ✦
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Up next</p>
                    <p className="font-semibold">React fundamentals</p>
                  </div>
                  <span className="ml-auto text-slate-400">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold text-cyan-600">LEARNING, REIMAGINED</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to keep moving forward.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Simple tools and a clear path make meaningful progress feel natural.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            [
              "01",
              "Learn from experts",
              "Get practical knowledge from people who use these skills every day.",
              "bg-cyan-50 text-cyan-600",
            ],
            [
              "02",
              "Practice with purpose",
              "Turn ideas into real projects with guided exercises and feedback.",
              "bg-indigo-50 text-indigo-600",
            ],
            [
              "03",
              "Track your growth",
              "See your progress, celebrate milestones, and stay motivated.",
              "bg-amber-50 text-amber-600",
            ],
          ].map(([number, title, text, color]) => (
            <article
              key={number}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`inline-flex rounded-lg px-3 py-1 text-sm font-bold ${color}`}
              >
                {number}
              </span>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <a
                href="#learn-more"
                className="mt-6 inline-block text-sm font-semibold text-slate-900"
              >
                Learn more <span className="ml-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-cyan-600">POPULAR COURSES</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Start learning today.
              </h2>
            </div>
            <a
              href="#all-courses"
              className="font-semibold text-slate-700 hover:text-cyan-600"
            >
              View all courses →
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Web development",
                "Build beautiful, modern websites.",
                "12 lessons",
                "bg-indigo-100",
              ],
              [
                "UI/UX design",
                "Design products people love.",
                "18 lessons",
                "bg-rose-100",
              ],
              [
                "Data & analytics",
                "Make smarter decisions with data.",
                "15 lessons",
                "bg-amber-100",
              ],
            ].map(([title, description, lessons, color]) => (
              <article
                key={title}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <div
                  className={`flex h-36 items-center justify-center ${color}`}
                >
                  <span className="text-5xl">✦</span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {lessons}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-slate-600">{description}</p>
                  <button className="mt-5 font-semibold text-cyan-700">
                    Start course →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="get-started"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="rounded-3xl bg-cyan-400 px-8 py-12 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Your next chapter starts here.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-800">
            Join a community of curious people building a better future through
            learning.
          </p>
          <a
            href="#signup"
            className="mt-7 inline-block rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Create your free account
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
