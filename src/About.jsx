import React from 'react';


const About = () => {
      return (
            <div className=' w-10/12 mx-auto mt-12'>
                  {/* upper title section  */}
                  <div className=' md:w-3/4 mx-auto text-center'>
                        <h1 className='text-4xl font-semibold my-4 md:mx-28'>A reader lives a thousand lives before he dies</h1>

                        <p className=' text-lg'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                  </div>

                  {/* Details  */}
                  <div className=' flex flex-col md:flex-row gap-10 my-10'>
                        {/* left aide  */}
                        <div className=' md:w-[50%]'>
                              <div>
                                    <h1 className=' text-2xl font-semibold'>Books are a uniquely portable magic.</h1>
                                    <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.</p>
                                    <br />
                                    <p className=' text-lg'>Many say exploration is part of our destiny, but it’s actually our duty to future generations.</p>
                              </div>
                              <div className=' mt-10'>
                                    <h1 className=' text-2xl font-semibold'>The first mate and his Skipper too will do?</h1>
                                    <p className=' text-lg'>Well, the way they make shows is, they make one show. That show's called a pilot.</p>
                                    <br />
                                    <p className=' text-lg'>Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs.Some don't, become nothing. She starred in one of the ones that became nothing.</p>
                              </div>
                              <div className=' mt-10'>
                                    <h1 className=' text-2xl font-semibold'>Is the Space Pope reptilian!?</h1>
                                    <p className=' text-lg'>A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.</p>
                              </div>

                        </div>
                        {/* right side  */}
                        <div className=' md:w-[50%]'>
                              <div>
                                    <h1 className=' text-2xl font-semibold'>How much money you got on you?</h1>
                                    <p className=' text-lg'>The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest.</p>
                                    <br />
                                    <p className=' text-lg'>Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.</p>
                              </div>
                              <div className=' mt-10'>
                                    <h1 className=' text-2xl font-semibold'>Galaxies Orion's sword globular star cluster?</h1>
                                    <p className=' text-lg'>A business big enough that it could be listed on the NASDAQ goes belly up. Disappears!</p>
                                    <br />
                                    <p className=' text-lg'>It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.</p>
                              </div>
                              <div className=' mt-10'>
                                    <h1 className=' text-2xl font-semibold'>When has justice ever been as simple as a rule book?</h1>
                                    <p className=' text-lg'> This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.</p>
                              </div>

                        </div>
                  </div>

            </div>
      );
};

export default About;