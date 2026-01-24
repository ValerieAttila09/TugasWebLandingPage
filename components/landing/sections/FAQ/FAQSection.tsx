'use client';

import { FAQSectionData } from '@/lib/constants';
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
	const leftContainerRef = useRef<HTMLDivElement>(null);
	const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (leftContainerRef.current) {
				gsap.to(leftContainerRef.current, {
					scrollTrigger: {
						trigger: leftContainerRef.current?.parentElement,
						start: "top top",
						end: "bottom center",
						pin: leftContainerRef.current,
						pinSpacing: false,
						markers: false,
					}
				});
			}
		});

		return () => ctx.revert();
	}, []);

	const handleQuestionClick = (index: number) => {
		const isExpanding = expandedIndex !== index;
		setExpandedIndex(isExpanding ? index : null);

		const answerDiv = answerRefs.current[index];
		if (!answerDiv) return;

		if (isExpanding) {
			gsap.fromTo(
				answerDiv,
				{
					opacity: 0,
					height: 0,
					marginTop: 0,
				},
				{
					opacity: 1,
					height: "auto",
					marginTop: 24,
					duration: 0.5,
					ease: "power2.out",
				}
			);
		} else {
			gsap.to(answerDiv, {
				opacity: 0,
				height: 0,
				marginTop: 0,
				duration: 0.4,
				ease: "power2.in",
				onComplete: () => {
					setExpandedIndex(null);
				}
			});
		}
	};

	return (
		<div className='min-h-screen w-full p-6 sm:p-12 md:p-18'>
			<div className="w-full flex items-start sm:gap-16 md:gap-32">
				
				<div ref={leftContainerRef} className="w-full space-y-10">
					<div className="flex items-center gap-4">
						<div className="rounded-full p-2 bg-neutral-900 flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
							</svg>
						</div>
						<div className="">
							<h3 className="text-2xl font-semibold text-white">Sarah Johnson</h3>
							<span className="text-sm font-thin text-neutral-400">Customer Success Manager</span>
						</div>
					</div>
					<div className="space-y-6">
						<h2 className="text-2xl font-semibold text-white">Still have questions?</h2>
						<p className="text-md text-neutral-300 font-thin">Can't find what you're looking for? Our team is here to help! Whether you need clarification, have a specific question, or want to learn more about our services, we'd love to hear from you. Let's get you the answers you need.</p>
					</div>
				</div>
				
				<div className="w-full space-y-8">
					{FAQSectionData.map((data, index) => {
						return (
							<div className="space-y-0" key={data.question}>
								<button
									onClick={() => handleQuestionClick(index)}
									className="w-full flex items-center justify-between py-4 px-0 hover:opacity-80 transition-opacity cursor-pointer"
								>
									<h3 className="text-2xl font-semibold text-white text-left">{data.question}</h3>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className={`size-4 text-neutral-300 transition-transform duration-500 flex-shrink-0 ${
											expandedIndex === index ? "rotate-0" : "-rotate-90"
										}`}
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
									</svg>
								</button>
								<div
									ref={(el) => {
										answerRefs.current[index] = el;
									}}
									className="overflow-hidden"
									style={{
										height: expandedIndex === index ? "auto" : 0,
										opacity: expandedIndex === index ? 1 : 0,
										marginTop: expandedIndex === index ? 24 : 0,
									}}
								>
									<p className="font-thin text-neutral-300 text-md pb-6">{data.answers}</p>
								</div>
								<div className="w-full h-px bg-neutral-800" />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default FAQSection;