<template>
	<a class="text-white cursor-pointer hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" @click="open = true">Privacy Policy</a>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="relative z-10" @close="open = false">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			</TransitionChild>

			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<TransitionChild
						as="template"
						enter="ease-out duration-300"
						enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leave-from="opacity-100 translate-y-0 sm:scale-100"
						leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<DialogPanel
							class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
						>
						<!-- Modal header -->
			<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Privacy Policy</h3>
				<button
					type="button"
					class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
					@click="open = false"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
			</div>
							<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-y-scroll h-96">
								<p class="text-base leading-relaxed">
					At No To Pests, accessible from notopests.com, one of our main priorities is the privacy of our visitors. This
					Privacy Policy document contains types of information that is collected and recorded by No To Pests and how we
					use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate
					to contact us.
				</p>
				<p class="text-base leading-relaxed">
					This Privacy Policy applies only to our online activities and is valid for visitors to our website with
					regards to the information that they shared and/or collect in No To Pests. This policy is not applicable to
					any information collected offline or via channels other than this website. Our Privacy Policy was created with
					the help of the Free Privacy Policy Generator.
				</p>
				<h4>Consent</h4>
				<p class="text-base leading-relaxed">
					By using our website, you hereby consent to our Privacy Policy and agree to its terms. Information we collect
					The personal information that you are asked to provide, and the reasons why you are asked to provide it, will
					be made clear to you at the point we ask you to provide your personal information. If you contact us directly,
					we may receive additional information about you such as your name, email address, phone number, the contents
					of the message and/or attachments you may send us, and any other information you may choose to provide.
				</p>
				<p class="text-base leading-relaxed">
					When you register for an Account, we may ask for your contact information, including items such as name,
					company name, address, email address, and telephone number.
				</p>
				<h4>How we use your information</h4>
				<p class="text-base leading-relaxed">We use the information we collect in various ways, including to:</p>
				<ul>
					<li>Provide, operate, and maintain our website</li>
					<li>Improve, personalize, and expand our website</li>
					<li>Understand and analyze how you use our website</li>
					<li>Develop new products, services, features, and functionality</li>
					<li>
						Communicate with you, either directly or through one of our partners, including for customer service, to
						provide you with updates and other information relating to the website, and for marketing and promotional
						purposes
					</li>
					<li>Send you emails</li>
					<li>Find and prevent fraud</li>
				</ul>
				<h4>Log Files</h4>
				<p class="text-base leading-relaxed">
					No To Pests follows a standard procedure of using log files. These files log visitors when they visit
					websites. All hosting companies do this and a part of hosting services’ analytics. The information collected
					by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and
					time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information
					that is personally identifiable. The purpose of the information is for analyzing trends, administering the
					site, tracking users’ movement on the website, and gathering demographic information.
				</p>
				<h4>Cookies and Web Beacons</h4>
				<p class="text-base leading-relaxed">
					Like any other website, No To Pests uses ‘cookies’. These cookies are used to store information including
					visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is
					used to optimize the users’ experience by customizing our web page content based on visitors’ browser type
					and/or other information.
				</p>
				Advertising Partners Privacy Policies
				<p class="text-base leading-relaxed">
					You may consult this list to find the Privacy Policy for each of the advertising partners of No To Pests.
				</p>
				<p class="text-base leading-relaxed">
					Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used
					in their respective advertisements and links that appear on No To Pests, which are sent directly to users’
					browser. They automatically receive your IP address when this occurs. These technologies are used to measure
					the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on
					websites that you visit.
				</p>
				<p class="text-base leading-relaxed">
					Note that No To Pests has no access to or control over these cookies that are used by third-party advertisers.
				</p>
				<h4>Third Party Privacy Policies</h4>
				<p class="text-base leading-relaxed">
					No To Pests’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
					consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may
					include their practices and instructions about how to opt-out of certain options.
				</p>
				<p class="text-base leading-relaxed">
					You can choose to disable cookies through your individual browser options. To know more detailed information
					about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
				</p>
				<h4>CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
				<p class="text-base leading-relaxed">
					Under the CCPA, among other rights, California consumers have the right to:
				</p>
				<p class="text-base leading-relaxed">
					Request that a business that collects a consumer’s personal data disclose the categories and specific pieces
					of personal data that a business has collected about consumers.
				</p>
				<p class="text-base leading-relaxed">
					Request that a business delete any personal data about the consumer that a business has collected.
				</p>
				<p class="text-base leading-relaxed">
					Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.
				</p>

				<p class="text-base leading-relaxed">
					If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
					please contact us.
				</p>
				<h4>GDPR Data Protection Rights</h4>
				<p class="text-base leading-relaxed">
					We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled
					to the following:
				</p>
				<p class="text-base leading-relaxed">
					The right to access – You have the right to request copies of your personal data. We may charge you a small
					fee for this service.
				</p>
				<p class="text-base leading-relaxed">
					The right to rectification – You have the right to request that we correct any information you believe is
					inaccurate. You also have the right to request that we complete the information you believe is incomplete.
				</p>
				<p class="text-base leading-relaxed">
					The right to erasure – You have the right to request that we erase your personal data, under certain
					conditions.
				</p>
				<p class="text-base leading-relaxed">
					The right to restrict processing – You have the right to request that we restrict the processing of your
					personal data, under certain conditions.
				</p>
				<p class="text-base leading-relaxed">
					The right to object to processing – You have the right to object to our processing of your personal data,
					under certain conditions.
				</p>
				<p class="text-base leading-relaxed">
					The right to data portability – You have the right to request that we transfer the data that we have collected
					to another organization, or directly to you, under certain conditions.
				</p>
				<p class="text-base leading-relaxed">
					If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
					please contact us.
				</p>
				<h4>Children's Information</h4>
				<p class="text-base leading-relaxed">
					Another part of our priority is adding protection for children while using the internet. We encourage parents
					and guardians to observe, participate in, and/or monitor and guide their online activity.
				</p>
				<p class="text-base leading-relaxed">
					No To Pests does not knowingly collect any Personal Identifiable Information from children under the age of
					13. If you think that your child provided this kind of information on our website, we strongly encourage you
					to contact us immediately and we will do our best efforts to promptly remove such information from our
					records.
				</p>
							</div>
							<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<button
									type="button"
									class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
									@click="open = false"
									ref="cancelButtonRef"
								>
									Close
								</button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

const open = ref(false);
</script>
