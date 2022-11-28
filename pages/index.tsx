import Head from "next/head";
import { FirstChart } from "../components/FirstChart";
import { FloatButton } from "../components/FloatButton";

export default function Index() {
  return (
    <div className="flex flex:col h:100vh w:full bg:#fffbff px:6% py:8%">
      <Head>
        <title>Be Kind.</title>
        <meta name="description" content="Be Kind." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <h1 className='f:#6C5464 f:bold f:"Source Serif Pro" f:55'>Kind</h1>
        <h1 className='f:#EF97E9 f:bold f:"Source Serif Pro" f:55'>.</h1>
        <h1 className='f:#6C5464 f:bold f:"Source Serif Pro" f:55'>be</h1>
      </div>

      <FloatButton />

      <main className="flex flex:1">
        <div className="flex flex:1 flex:col">
          <h2 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:16 f:34'>
            What we do:
          </h2>
          <h1 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:20% f:34'>
            1.
          </h1>
          <h2 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:20'>
            A one-of-a-kind machine
          </h2>
          <p className="f:#6C5464 f:'Fira Code' mt:30 f:21 lh:1.9">
            We've built the Kind Machine, a super efficient virtual machine for
            running formally verified programs on an ultra parallel environment.
            In other words: a superfast machine that runs bug free code.
          </p>
          <p className="f:#EF97E9 f:'Fira Code' mt:30 f:21">
            How is that even possible?
          </p>
        </div>
        <div>
          <FirstChart />
        </div>
      </main>
      <main className="flex flex:1 mt:150">
        <div className="flex flex:1 flex:col">
          <h1 className='f:#6C5464 f:bold f:"Source Serif Pro" f:34'>2.</h1>
          <h2 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:20'>
            A <i>kinder</i> programming language
          </h2>
          <p className="f:#6C5464 f:'Fira Code' mt:30 f:21 lh:1.9">
            Humans make error. It doesn't mean our infrastructure must be full
            of them. In the Kind language you write your code in two parts:
            first in the WHAT section you define what you want to accomplish,
            the overall goals, the things that cannot break. Then, in the HOW
            section, you actually give out the computer the specific
            instructions on how to do that. If at any point the instructions
            create a situation that would contradict the core tenets you've
            defined, the language will let you know and prevent the code from
            even compiling.
          </p>
          <p className="f:#EF97E9 f:'Fira Code' mt:30 f:21">
            How would that even work?
          </p>
        </div>
        <div>
          <FirstChart />
        </div>
      </main>
    </div>
  );
}
