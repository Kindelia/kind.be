import Head from "next/head";
import { useEffect, useState } from "react";

import { FirstChart } from "../components/FirstChart";
import { KindBenchChart } from "../components/KindBenchChart";
import { KindEfficiencyChart } from "../components/KindEfficiencyChart";

function KindMachine() {
	return (
		<div className="flex flex:1 jc:space-between w:100%">
			<div className="flex flex:1 flex:col">
				<h2 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:16 f:34'>
					What we do:
				</h2>
				<h1 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:100 f:34'>
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
		</div>
	);
}

function KindProgrammingLanguage() {
	return (
		<div className="flex flex:1 jc:space-between w:100%">
			<div className="flex flex:1 flex:col">
				<h1 className='f:#6C5464 f:bold f:"Source Serif Pro" f:34'>2.</h1>
				<h2 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:20'>
					A <i>kinder</i> programming language
				</h2>
				<p className="f:#6C5464 f:'Fira Code' mt:30 f:21 lh:1.9">
					Humans make error. It doesn't mean our infrastructure must be full of
					them. In the Kind language you write your code in two parts: first in
					the WHAT section you define what you want to accomplish, the overall
					goals, the things that cannot break. Then, in the HOW section, you
					actually give out the computer the specific instructions on how to do
					that. If at any point the instructions create a situation that would
					contradict the core tenets you've defined, the language will let you
					know and prevent the code from even compiling.
				</p>
				<p className="f:#EF97E9 f:'Fira Code' mt:30 f:21">
					How would that even work?
				</p>
			</div>
			<div>
				<KindBenchChart />
			</div>
		</div>
	);
}

function KindSharedComputer() {
	return (
		<div className="flex flex:1 jc:space-between w:100%">
			<div className="flex flex:1 flex:col">
				<h1 className='f:#6C5464 f:bold f:"Source Serif Pro" f:34'>3.</h1>
				<h2 className='f:#6C5464 f:bold f:"Source Serif Pro" mt:20'>
					A shared computer for
					<br />
					all <i>humankind</i>
				</h2>
				<p className="f:#6C5464 f:'Fira Code' mt:30 f:21 lh:1.9">
					We've been always a big believer in the potential of a global shared
					inviolable computer. In fact we've even help build it. But the hacks,
					the scams, the pure speculative cryptocurrencies, the
					hyper-capitalization of everything, we're not so on board with that.
					So we're building the Kind Network, a shared chain of computers that
					is unlike other blockchains. For start, it doesn't even come with a
					cryptocurrency, which means you can use it without needing to buy
					anything in order to participate.
				</p>
				<p className="f:#EF97E9 f:'Fira Code' mt:30 f:21">
					Really? Tell me more.
				</p>
			</div>
			<div>
				<KindEfficiencyChart />
			</div>
		</div>
	);
}

export default function Index() {
	const [step, setStep] = useState(0);

	return (
		<div className="flex flex:col w:full bg:#fffbff px:10% py:8%">
			<Head>
				<title>Be Kind.</title>
				<meta name="description" content="Be Kind." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="fixed flex mt:-50">
				<h1 className='f:#6C5464 f:bold f:"Source Serif Pro" f:55'>Kind</h1>
				<h1 className='f:#EF97E9 f:bold f:"Source Serif Pro" f:55'>.</h1>
				<h1 className='f:#6C5464 f:bold f:"Source Serif Pro" f:55'>be</h1>
			</div>

			<div className="flex flex-1 flex:col gap:250">
				<KindMachine />
				<KindProgrammingLanguage />
				<KindSharedComputer />
			</div>
		</div>
	);
}
