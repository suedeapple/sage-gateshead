'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import PlusIcon from './PlusIcon'
import QuoteIcon from './QuoteIcon'
import YouTubeEmbed from './YouTubeEmbed'

const SITE_URL = 'https://sage-gateshead.vercel.app'

export default function StoryWall() {
  useEffect(() => {
    function handleModalOpen(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('[data-story-link]')
      if (!link) return
      e.preventDefault()
      const storyId = link.getAttribute('data-story-id')
      if (storyId) {
        const modal = document.getElementById(storyId)
        if (modal) modal.style.display = 'block'
      }
    }

    function handleModalClose(e: MouseEvent) {
      const btn = (e.target as HTMLElement).closest('.close')
      if (!btn) return
      e.preventDefault()
      document.querySelectorAll<HTMLElement>('.modal').forEach(m => {
        m.style.display = 'none'
      })
      document.querySelectorAll('iframe').forEach(iframe => {
        iframe.src = iframe.src
      })
    }

    document.addEventListener('click', handleModalOpen)
    document.addEventListener('click', handleModalClose)

    const videos = document.querySelectorAll<HTMLVideoElement>('video')
    videos.forEach(video => {
      video.muted = true
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            const observer = new IntersectionObserver(
              entries => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) video.play()
                  else video.pause()
                })
              },
              { threshold: 0.25 }
            )
            observer.observe(video)
          })
          .catch(() => {})
      }
    })

    return () => {
      document.removeEventListener('click', handleModalOpen)
      document.removeEventListener('click', handleModalClose)
    }
  }, [])

  return (
    <>




            <section className="cards">






                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1944">


                        <Image src="/media/0g3hglgd/img_1637.webp" alt="IMG 1637" width={480} height={800} />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Jen Clark</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#fb6220' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1938">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Joan Harris</div>

                        <div className="card__text card__text--black  card__text--portrait"><p>Walking onto that stage filled me with awe.</p></div>

                        <PlusIcon fill="black" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#00ff00' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1939">







                        <div className="card__author card__author--black card__author-- card__author--default">Steph Quilliam</div>

                        <div className="card__text card__text--black  card__text--default"><p>Thank you for <br />all you do <br />for families.</p></div>

                        <PlusIcon fill="black" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#fffd38' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1940">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Judith Wood-Archer</div>

                        <div className="card__text card__text--black  card__text--landscape"><p>Guaranteed a great performance no matter the genre.</p></div>

                        <PlusIcon fill="black" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1937">


                        <Image src="/media/nfej030d/img_1575.webp" alt="IMG 1575" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Michael Davison</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1942">


                        <Image src="/media/mspcvesv/microsoftteams-image-10.webp" alt="Microsoftteams Image (10)" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Victoria Eyre</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#c3fcfb' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">J A Hall</div>

                    <div className="card__text card__text--black  card__text--default"><p className="p1">Too many <br />great nights <br />to single out.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1881">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Steve Cook</div>

                        <div className="card__text card__text--black  card__text--landscape"><p className="p1">Life-affirming.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1880">


                        <Image src="/media/wrjlfkyp/hayley-l_480x800.webp" alt="Hayley L 480X800" width={480} height={800} />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Hayley L</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#fffd38' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1879">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Eileen Thompson</div>

                        <div className="card__text card__text--black  card__text--portrait"><p className="p1">Thank you <br />for all your<br />support Sage<br />Gateshead.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1878">


                        <Image src="/media/qqfnryvo/gareth-davies_960x400.webp" alt="Gareth Davies 960X400" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Gareth Davies</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#e18bff' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1877">







                        <div className="card__author card__author--black card__author-- card__author--default">Alison O'Neill</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Thrilled!</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1886">


                        <Image src="/media/telf5bat/cathy-baker_480x400.gif" alt="Cathy Baker 480X400" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Cathy Baker</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1885">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1885">
                                <source src="/media/53yai1qf/sg_homepage_loooped_liz-corry.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Liz Corry</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1887">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Lisa Patterson</div>

                        <div className="card__text card__text--black  card__text--portrait"><p className="p1">Sharing a<br />night out with<br />my best friend<br />and watching<br />her cry with<br />emotion at<br />numerous<br />performances.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1888">


                        <Image src="/media/155paavb/lauren-moor_480x400.gif" alt="Lauren Moor 480X400" width={480} height={400} unoptimized />




                        <div className="card__author card__author--white card__author-- card__author--default">Lauren Moor</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/kmugevio/gary-edgar_480x400.gif" alt="Gary Edgar 480X400" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Gary Edgar</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1890">


                        <Image src="/media/s1shno2i/matt-moore_480x400.webp" alt="Matt Moore 480X400" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Matt Moore</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1894">


                        <Image src="/media/cdhp0lvh/jamie-quickfall_480x800.gif" alt="Jamie Quickfall 480X800" width={480} height={800} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--portrait">Jamie Quickfall</div>

                        <div className="card__text card__text--black  card__text--portrait"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#fb6e23' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1891">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Julie Harvey</div>

                        <div className="card__text card__text--black  card__text--landscape"><p className="p1">I still have a feeling of<br />witnessing something<br />very special</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1892">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Coleen Ridley-Hindle</div>

                        <div className="card__text card__text--black  card__text--portrait"><p className="p1">I’d never<br />sang before<br />but I just love<br />it here.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1893">


                        <Image src="/media/ivxfbh4n/james-harrison_960x400.webp" alt="James Harrison 960X400" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">James Harrison</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#e18bff' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1895">







                        <div className="card__author card__author--black card__author-- card__author--default">Brian Maguire</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">You can’t<br />fail to be<br />impressed.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1896">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1896">
                                <source src="/media/ocsjqxhv/sg_loop_clarence-adodo.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Clarence Adoo</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#fffd38' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1897">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Isobel Hughes</div>

                        <div className="card__text card__text--black  card__text--landscape"><p className="p1">It’s who you’ve got <br />around you and the <br />resources.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#c3fcfb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1898">


                        <Image src="/media/snrljwf2/anna-williams_960x400.gif" alt="Anna Williams 960X400" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Anna Williams</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1899">


                        <Image src="/media/aofmzd5e/beth-tilling_480x400.webp" alt="Beth Tilling 480X400" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Beth Tilling</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1900">


                        <Image src="/media/jbpo4inz/caroline-james_480x400.gif" alt="Caroline James 480X400" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Caroline James</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1901">


                        <Image src="/media/sdwndjyk/paul-vivian-gill_960x400.webp" alt="Paul Vivian Gill 960X400" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Paul Vivian Gill</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1902">







                        <div className="card__author card__author--black card__author-- card__author--default">Malcolm Critten</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Sky’s the<br />limit really.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1903">







                        <div className="card__author card__author--black card__author-- card__author--landscape">James Hobson</div>

                        <div className="card__text card__text--black  card__text--landscape"><p>You can learn all sorts</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1904">


                        <Image src="/media/gmfjrs11/andrwe-collinson_480x400.webp" alt="Andrwe Collinson 480X400" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Andrew Collinson</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">Steven Riddle</div>

                    <div className="card__text card__text--black  card__text--default"><p>A haven from <br />a made world.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#fffd38' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1784">


                        <Image src="/media/d20gp5nv/2-musical-heart-and-soul.gif" alt="2 – Musical Heart And Soul" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Alfie Devendi</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1804">


                        <Image src="/media/ldxpddr2/3-mark-ridsdale.webp" alt="3 – Mark Ridsdale" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Mark Ridsdale</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/rzogdjth/4-opportunities-for-young-people.gif" alt="4 – Opportunities For Young People" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Zahara Ali</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1810">


                        <Image src="/media/452nfdgq/5-murray-gove.webp" alt="5 – Murray Gove" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Murray Gove</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1811">







                        <div className="card__author card__author--black card__author-- card__author--default">David Todd</div>

                        <div className="card__text card__text--black  card__text--default"><p>Meeting<br />lifelong<br />friends</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >


                    <Image src="/media/ujeh0cyu/7-a-former-girlfriend-took-me-to-a-rock-concert.gif" alt="7 – A Former Girlfriend Took Me To A Rock Concert" width={480} height={800} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--portrait">Joan Brown</div>

                    <div className="card__text card__text--black  card__text--portrait"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1813">


                        <Image src="/media/rkhlw2ds/8-steven-walters.webp" alt="8 – Steven Walters" width={480} height={800} />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Steven Walters</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1814">


                        <Image src="/media/peonguco/9-the-intimacy-of-the-venue.gif" alt="9 – The Intimacy Of The Venue" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Nicola Calvert</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1815">


                        <Image src="/media/p4ndtgin/10-catherine-shea.webp" alt="10 – Catherine Shea" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Catherine Shea</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1816">


                        <Image src="/media/1h5djyfs/11-something-for-every-music-taste.gif" alt="11 – Something For Every Music Taste" width={480} height={800} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--portrait">Enid Mitchell</div>

                        <div className="card__text card__text--black  card__text--portrait"></div>

                        <PlusIcon fill="black" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#e18bff' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1817">







                        <div className="card__author card__author--black card__author-- card__author--default">George Cowie</div>

                        <div className="card__text card__text--black  card__text--default"><p>Music<br />brought us<br />all together.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1818">


                        <Image src="/media/zy4jqwd4/13-susan-porter.webp" alt="13 – Susan Porter" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Susan Porter</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/gdfexl1f/14-joy-division-revisited.gif" alt="14 – Joy Division Revisited" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Edward Philo</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#c3fcfb' }}>







                    <div className="card__author card__author--black card__author-- card__author--portrait">Kelly Enderwick</div>

                    <div className="card__text card__text--black  card__text--portrait"><p>They installed<br />a zip-wire<br />across the <br />concourse.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#fffd38' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1821">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Crispian Oates</div>

                        <div className="card__text card__text--black  card__text--landscape"><p>A spectacular sight.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1822">


                        <Image src="/media/eqxlju32/17-enid-mitchell.webp" alt="17 – Enid Mitchell" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Enid Mitchell</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1823">







                        <div className="card__author card__author--black card__author-- card__author--default">Nicki Walker</div>

                        <div className="card__text card__text--black  card__text--default"><p>Music is the <br />sound that<br />love makes.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#e18bff' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1824">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Emily James</div>

                        <div className="card__text card__text--black  card__text--portrait"><p>It is for<br />everyone in<br />the North East</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1825">


                        <Image src="/media/pxblclcd/20-helen-simmons.webp" alt="20 – Helen Simmons" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Helen Simmons</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1826">


                        <Image src="/media/hw1o45ng/21-susan-wilton.webp" alt="21 – Susan Wilton" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Susan Wilton</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1827">







                        <div className="card__author card__author--black card__author-- card__author--landscape">David Auty</div>

                        <div className="card__text card__text--black  card__text--landscape"><p>The supreme quality<br />of Sage Gateshead's<br />acoustics.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#c3fcfb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1828">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Matthew Weddle</div>

                        <div className="card__text card__text--black  card__text--landscape"><p>People make Sage<br />Gateshead such a <br />warm environment.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#fffd38' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">Emily James</div>

                    <div className="card__text card__text--black  card__text--default"><p>No other<br />venue can<br />match.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1830">


                        <Image src="/media/le3bfbc5/25-phil-gray.webp" alt="25 – Phil Gray" width={480} height={400} />




                        <div className="card__author card__author--black card__author-- card__author--default">Phil Gray</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1711">







                        <div className="card__author card__author--black card__author-- card__author--default">Jacqui Hodgson</div>

                        <div className="card__text card__text--black  card__text--default"><p>The power <br />of music was <br />never stronger</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1726">


                        <Image src="/media/5peeg0gk/sage-gateshead_still-images_480x400_terri-mcloughlin.webp" alt="Sage Gateshead Still Images 480X400 Terri Mcloughlin" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Terri McLoughlin</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/mbvply5r/the-memorable-the-iconic-the-classic.gif" alt="The Memorable The Iconic The Classic" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Joyce Bowman</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1737">


                        <Image src="/media/jy2pi5bt/sage-gateshead_still-images_480x800_neil-chalmers-2.webp" alt="Sage Gateshead Still Images 480X800 Neil Chalmers 2" width={480} height={800} />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Neil Chalmers</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1738">


                        <Image src="/media/yfidfxwr/sage-gateshead_still-images_480x400_maureen.webp" alt="Sage Gateshead Still Images 480X400 Maureen" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Maureen</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#fb6e23' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1739">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Christine Hall</div>

                        <div className="card__text card__text--black  card__text--landscape"><p className="p1">Everything for everyman.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#c3fcfb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1740">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Moya</div>

                        <div className="card__text card__text--black  card__text--landscape"><p className="p1">Such a moving, <br />memorable <br />experience.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1741">


                        <Image src="/media/ikjnwdbc/sage-gateshead_still-images_480x800_daren-mcmahon.webp" alt="Sage Gateshead Still Images 480X800 Daren Mcmahon" width={480} height={800} />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Darren McMahon</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#e18bff' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1742">







                        <div className="card__author card__author--black card__author-- card__author--default">Debbie Dixon</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Every time I <br />see it I think of <br />how proud I <br />am of him.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1743">


                        <Image src="/media/vg1bb5jq/sage-gateshead_still-images_480x400_josie-carruthers.webp" alt="Sage Gateshead Still Images 480X400 Josie Carruthers" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Josie Carruthers </div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />

                        <QuoteIcon fill="white" />



                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1744">







                        <div className="card__author card__author--black card__author-- card__author--default">David Biswell</div>

                        <div className="card__text card__text--black  card__text--default"><p>Haway <br />the lads</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1745">


                        <Image src="/media/c2eoueto/always-smiling.gif" alt="Always Smiling" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Jan Marie Scott-Collier</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1746">


                        <Image src="/media/rvwbawzo/laurens-story.gif" alt="Laurens Story" width={480} height={800} unoptimized />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Lauren</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >


                    <Image src="/media/4i2iexd1/a-music-venue-for-everyone.gif" alt="A Music Venue For Everyone" width={480} height={800} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--portrait">Michael Petherick</div>

                    <div className="card__text card__text--black  card__text--portrait"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#fb6e23' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1750">







                        <div className="card__author card__author--black card__author-- card__author--default">Joyce</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">One of the <br />most amazing<br />moments of <br />my life.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/ia0padi5/sambusada-from-indonesia.gif" alt="Sambusada From Indonesia" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Alys Kordbarlag</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1749">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1749">
                                <source src="/media/rzdd34su/sg_homepage_imogen_loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Robyn Taylor McEwan</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1752">







                        <div className="card__author card__author--black card__author-- card__author--default">Steven Cruickshank</div>

                        <div className="card__text card__text--black  card__text--default"><p>We are so<br />fortunate<br />here.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1753">


                        <Image src="/media/ft2dw4ka/sage-gateshead_still-images_480x400_jeff-swan.webp" alt="Sage Gateshead Still Images 480X400 Jeff Swan" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Jeff Swan</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#1da5fb' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">Alan Gill</div>

                    <div className="card__text card__text--black  card__text--default"><p className="p1">The northern <br />spirit and <br />atmosphere.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#e18bff' }}>







                    <div className="card__author card__author--black card__author-- card__author--portrait">Ted Watt</div>

                    <div className="card__text card__text--black  card__text--portrait"><p className="p1">Superb <br />acoustics <br />and such a <br />varied offering, <br />something for <br />every taste.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1756">


                        <Image src="/media/qqkferhx/sage-gateshead_still-images_480x400_aly-laws.webp" alt="Sage Gateshead Still Images 480X400 Aly Laws" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Aly Laws</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1757">


                        <Image src="/media/tq3poysw/sage-gateshead_still-images_960x400_john-borwick.webp" alt="Sage Gateshead Still Images 960X400 John Borwick" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">John Borwick</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#fffd38' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">Clarence Adoo MBE</div>

                    <div className="card__text card__text--black  card__text--default"><p>Music can transform people.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1278">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1278">
                                <source src="/media/0dsb5afa/sg_isabelle-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Isabelle</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1280">


                        <Image src="/media/msucvj0j/sg_animation_tears.gif" alt="John Smith –&#160;Tears" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">John Smith</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1283">


                        <Image src="/media/eiphmjgp/katherine-leadbeter-within-the-hour.gif" alt="Katherine Leadbeter – Greggs" width={480} height={800} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--portrait">Katherine Leadbeter</div>

                        <div className="card__text card__text--black  card__text--portrait"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1285">


                        <Image src="/media/cm1atedv/matt-wigley-the-in-harmony-performance.gif" alt="Matt Wigley – In Harmony" width={480} height={400} unoptimized />




                        <div className="card__author card__author--white card__author-- card__author--default">Matt Wigley</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1287">


                        <Image src="/media/hhphdw4b/hannah-fumoleau-performing-as-a-backing.gif" alt="Hannah Fumoleau – Efterklang" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Hannah Fumoleau</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1290">


                        <Image src="/media/3xwmtgvv/sg_animation_magic.gif" alt="Sue Newton - Magic" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Sue Newton</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1291">







                        <div className="card__author card__author--black card__author-- card__author--default">Anne Tate</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">We are a collective of music lovers</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1293">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1293">
                                <source src="/media/pkzjziji/sg_homepage_et_loop-2.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Rob Williamson</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1295">


                        <Image src="/media/550bswfm/helen-blythe-a-place-for-disabled-v2.gif" alt="Helen Blythe – RNS Moves 2" width={480} height={800} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--portrait">Helen Blythe</div>

                        <div className="card__text card__text--black  card__text--portrait"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1297">


                        <Image src="/media/tc5d5afx/vee-pollock.webp" alt="Vee Pollock" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Vee Pollock</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--large" >


                    <Image src="/media/s0inpqj0/were-changing-our-name-960x800.gif" alt="We're changing our name" width={960} height={800} unoptimized />





                    <div className="card__text card__text--black  card__text--large"></div>






                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1302">


                        <Image src="/media/ogmjfbxy/ross-millard-orbital.webp" alt="Ross Millard –&#160;Orbital" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Ross Millard</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1331">


                        <Image src="/media/0oemav3p/lynnecampbell_larsvogt.webp" alt="Lynne Campbell –&#160;Lars Vogt" width={960} height={400} />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Lynne Campbell</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1311">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1311">
                                <source src="/media/gtxhslds/sg_homepage_rob-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Rob Williamson</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1309">







                        <div className="card__author card__author--black card__author-- card__author--default">Robyn Taylor McEwan</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Seeing Diversity rehearsing outside on the street.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1313">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1313">
                                <source src="/media/qljhtgns/sg_virtual-choir.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Emma-Louise Gorman</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1317">


                        <Image src="/media/4dzlc3ob/sg_animation_johnny-vegas.gif" alt="Graham Orchard – Johnny Vegas" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Graham Orchard</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--large" >


                    <Image src="/media/qsper25d/sg_animation_logo.gif" alt="Logo Block" width={960} height={800} unoptimized />





                    <div className="card__text card__text--black  card__text--large"></div>






                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1315">


                        <Image src="/media/cevd5luh/louise-duff.webp" alt="Louise Duff" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Louise Duff</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1337">


                        <Image src="/media/cp4a53x0/sg_animation_fresh-and-invigorating.gif" alt="Beverley Knight - Fresh" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Beverley Knight</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1340">


                        <Image src="/media/qpeiyghg/sg_animation_top-5-gigs.gif" alt="Jack Richardson - Top 5" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Jack Richardson</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1322">


                        <Image src="/media/yafk5g0r/sg_animation_sensory-experience.gif" alt="Lynne Campbell – Sensory" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Lynne Campbell</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#00ff00' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1320">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Alex Walters</div>

                        <div className="card__text card__text--black  card__text--portrait"><p className="p1">Supporting Talisk, my favourite band, on the stage at Sage One this year is the highlight of my life so far.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/1ljf1dsy/sg_homepage_frame-animations_big-sing.gif" alt="Sam Clark" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Sam Clark</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >


                    <Image src="/media/3yjdfud1/sg_animation_world-class_1.gif" alt="Geoff Thompson - World" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Geoff Thompson</div>

                    <div className="card__text card__text--black  card__text--default"></div>






                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1324">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1324">
                                <source src="/media/ettc5o5h/sg_jessica.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Jessica</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1348">


                        <Image src="/media/h25h1af2/peter-woolford-star-wars.gif" alt="Peter Woolford - Starwars" width={480} height={400} unoptimized />




                        <div className="card__author card__author--white card__author-- card__author--default">Peter Woolford</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1349">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Jim Craigie</div>

                        <div className="card__text card__text--black  card__text--portrait"><p className="p1">I’ve supported the orchestra since it formed in 1958.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1381">


                        <Image src="/media/ra2l23ba/helen-blythe.webp" alt="Helen Blythe" width={480} height={800} />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Helen Blythe</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1359">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1359">
                                <source src="/media/elwpu2rq/mike-ranson.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--portrait">Mike Ranson</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#c3fcfb' }}>







                    <div className="card__author card__author--black card__author-- card__author--portrait">Jo Thornton</div>

                    <div className="card__text card__text--black  card__text--portrait"><p className="p1">Caribou was the first partially standing gig after lockdown. Everyone was ecstatic throughout.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1364">


                        <Image src="/media/04afc4zy/jane-dube.webp" alt="Jane Dube" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Jane Dube</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/chnhgjo2/sg_animation_tuba-man_1.gif" alt="Jasmine Oakes - Tuba Man" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Jasmine Oakes</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">Judith Mason</div>

                    <div className="card__text card__text--black  card__text--default"><p className="p1">It’s as much as part of the landscape here as the Tyne Bridge.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1371">


                        <Image src="/media/olun3xxh/janette-atkinson-people-still-talk.gif" alt="Janette Atkinson" width={480} height={400} unoptimized />




                        <div className="card__author card__author--white card__author-- card__author--default">Janette Atkinson</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1374">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1374">
                                <source src="/media/foaedeyw/sg_gwen-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--portrait">Gwen</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#fb6e23' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1375">







                        <div className="card__author card__author--black card__author-- card__author--default">Josh Parker</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Laughing, getting it wrong, and learning in a fun way.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1357">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1357">
                                <source src="/media/1nwfq11s/jim-craigie-beethoven2.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--portrait">Jim Craigie</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1377">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1377">
                                <source src="/media/xkcjsge1/sg_wendy-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--portrait">Wendy Holland</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1379">


                        <Image src="/media/rf1p42jj/david-ridley-there-are-so-many.gif" alt="David Ridley" width={960} height={400} unoptimized />




                        <div className="card__author card__author--white card__author-- card__author--landscape">David Ridley</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1383">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1383">
                                <source src="/media/qxnl0a15/sg_homepage_peoples-requiem-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Sara Vening</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#c3fcfb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1384">







                        <div className="card__author card__author--black card__author-- card__author--default">Roger Fern</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Absolutely extraordinary</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1386">


                        <Image src="/media/ztlh1rml/jackie-thompson-the-power-of-music.gif" alt="Jackie Thompson" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Jackie Thompson</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1388">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1388">
                                <source src="/media/kueftnrp/sg_vanessa-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Vanessa</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1391">


                        <Image src="/media/ybbflzat/tim-cranfield-north-east-landmark.gif" alt="Tim Cranfield - NE Landmark" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Tim Cranfield</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1392">







                        <div className="card__author card__author--black card__author-- card__author--default">Chris Monks</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">I had the honour to sing with Bobby McFerrin.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1394">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1394">
                                <source src="/media/r1df4vrn/sg_homepage_ross_loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Ross Millard</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >


                    <Image src="/media/acjg3v0w/wendy-holland-i-performed-in-a-rock-choir-pink.gif" alt="Wendy Holland - Rock Choir" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Wendy Holland</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#c3fcfb' }}>







                    <div className="card__author card__author--black card__author-- card__author--portrait">Irene McLane</div>

                    <div className="card__text card__text--black  card__text--portrait"><p className="p1"><span className="s1">Wagner’s The Ring Cycle brought me to the opera.</span></p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1401">


                        <Image src="/media/ztcie1m3/phil-davids-communities.webp" alt="Phil Davids – Communities" width={960} height={400} />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Phil Davids</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1405">


                        <Image src="/media/1esp0lnp/simon-pallett.webp" alt="Simon Pallett" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Simon Pallett</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1407">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1407">
                                <source src="/media/ytpccxmq/sg_marzuqah-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Marzuqah</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1409">


                        <Image src="/media/2wtllvwf/jim-craigie-roger-n.webp" alt="Jim Craigie –&#160;Roger N" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Jim Craigie</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1411">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1411">
                                <source src="/media/mdapq5l2/jackrichardson.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--portrait">Jack Richardson</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#e18bff' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1412">







                        <div className="card__author card__author--black card__author-- card__author--portrait">Paul Emery</div>

                        <div className="card__text card__text--black  card__text--portrait"><p className="p1">I was very grateful for all the online sessions Sage Gateshead provided during lockdown.</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1415">


                        <Image src="/media/yhqlgunp/irene-soulsby-i-still-have-the-postcard.gif" alt="Irene Soulsby" width={480} height={400} unoptimized />




                        <div className="card__author card__author--white card__author-- card__author--default">Irene Soulsby</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1417">


                        <Image src="/media/pqjpgiqr/joanne-adams.webp" alt="Joanne Adams – Nick Cave" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Joanne Adams</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#c3fcfb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1418">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Michael Ranson</div>

                        <div className="card__text card__text--black  card__text--landscape"><p className="p1"><span className="s1">The versatility of the place</span></p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1423">


                        <Image src="/media/upibamyq/laura-hague.webp" alt="Laura Hague –&#160;FJM" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Laura Hague</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1425">


                        <Image src="/media/q4sbl4ov/sg_animation_rollercoaster.gif" alt="Sam – Rollercoaster" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Sam</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#e18bff' }}>







                    <div className="card__author card__author--black card__author-- card__author--portrait">Tim Cranfield</div>

                    <div className="card__text card__text--black  card__text--portrait"><p className="p1">Performing Elgar’s The Kingdom here with my peers in my first year at university.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >


                    <Image src="/media/3ekj5yal/sg_animation_meeting-my-husband.gif" alt="Louise Duff - Husband" width={480} height={400} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--default">Louise Duff</div>

                    <div className="card__text card__text--black  card__text--default"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1430">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1430">
                                <source src="/media/saefdfbg/sg_alex-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--portrait">Alex</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1437">


                        <Image src="/media/d4fb3iwb/jessica-mccabe-copy.webp" alt="Jessica McCabe" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Jessica McCabe</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1434">


                        <Image src="/media/ruofa0up/sg_animation_beetle.gif" alt="Judith Mason - Bug" width={480} height={800} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--portrait">Judith Mason</div>

                        <div className="card__text card__text--black  card__text--portrait"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#e18bff' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1431">







                        <div className="card__author card__author--black card__author-- card__author--default">Sarah Thackray</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">An amazing building with amazing outlooks</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">Jane Dube</div>

                    <div className="card__text card__text--black  card__text--default"><p className="p1">Young people feel welcome and comfortable.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#1da5fb' }}>


                    <Image src="/media/3yhdolbt/geoff-thompson.webp" alt="Geoff Thompson –&#160;Never been" width={960} height={400} />




                    <div className="card__author card__author--black card__author-- card__author--landscape">Geoff Thompson</div>

                    <div className="card__text card__text--black  card__text--landscape"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1403">


                        <Image src="/media/002ph031/lucy-scott-what-a-night.gif" alt="Lucy Scott" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Lucy Scott</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1439">


                        <Image src="/media/5unnnfwb/sg_animation_linked-by-music.gif" alt="Louise Duff - Linkes" width={480} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--default">Christine Ogg</div>

                        <div className="card__text card__text--black  card__text--default"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1441">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1441">
                                <source src="/media/1modskiu/sg_homepage_find-your-voice.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Hannah Fumoleau</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1442">







                        <div className="card__author card__author--black card__author-- card__author--default">Paul Emery</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">I’ve sung here for the last 10 years</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1444">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1444">
                                <source src="/media/j25mwsdj/vee-pollock.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Vee Pollock</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#fffd38' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1445">







                        <div className="card__author card__author--black card__author-- card__author--landscape">Feitong</div>

                        <div className="card__text card__text--black  card__text--landscape"><p className="p1"><span className="s1">Helps to develop my confidence</span></p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1447">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1447">
                                <source src="/media/bmpcehab/sg_homepage_christine-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Christine Ogg</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#fffd38' }}>







                    <div className="card__author card__author--black card__author-- card__author--default">Roger Fern</div>

                    <div className="card__text card__text--black  card__text--default"><p className="p1">It’s my building<span className="Apple-converted-space"> – that’s how it feels.</span></p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1452">


                        <Image src="/media/3m0fyjmt/sylvia-graham.webp" alt="Sylvia Graham" width={480} height={800} />




                        <div className="card__author card__author--white card__author-- card__author--portrait">Sylvia Graham</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#1da5fb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1453">







                        <div className="card__author card__author--black card__author-- card__author--default">Joanne Adams</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Inspired me to study music</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1455">


                        <Image src="/media/necjg23c/peter-woolford.webp" alt="Peter Woolford –&#160;Rufus" width={960} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--landscape">Peter Woolford</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#e18bff' }}>


                    <Image src="/media/30wgedvm/tonyking.webp" alt="Tony King" width={960} height={400} />




                    <div className="card__author card__author--black card__author-- card__author--landscape">Tony King</div>

                    <div className="card__text card__text--black  card__text--landscape"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" >
                    <a href="#" data-story-link="" data-story-id="modal-1458">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1458">
                                <source src="/media/dzbe5u3o/sg_josh-loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--portrait">Josh Parker</div>

                        <div className="card__text card__text--white  card__text--portrait"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#c3fcfb' }}>







                    <div className="card__author card__author--black card__author-- card__author--portrait">Simon Pallett</div>

                    <div className="card__text card__text--black  card__text--portrait"><p className="p1">The online classes are great. My granddaughter has been joining in from Norwich.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1463">


                        <Image src="/media/qadgniol/sg_animation_butterflies.gif" alt="Sam –&#160;Butterflies" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Sam</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1461">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1461">
                                <source src="/media/tckhol1q/john-shipley.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">John Shipley</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" style={{ backgroundColor: '#fffd38' }}>


                    <Image src="/media/wpfpdkbj/jessica-10.webp" alt="Jessica –&#160;10" width={960} height={400} />




                    <div className="card__author card__author--black card__author-- card__author--landscape">Jessica</div>

                    <div className="card__text card__text--black  card__text--landscape"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--portrait" style={{ backgroundColor: '#e18bff' }}>







                    <div className="card__author card__author--black card__author-- card__author--portrait">Irene Soulsby</div>

                    <div className="card__text card__text--black  card__text--portrait"><p className="p1">I’m a local lass and so proud to have something like this on my doorstep.</p></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1475">


                        <Image src="/media/jtufos0s/judith-mason-classical.webp" alt="Judith Mason – Classical" width={480} height={400} />




                        <div className="card__author card__author--white card__author-- card__author--default">Judith Mason</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#c3fcfb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1476">







                        <div className="card__author card__author--black card__author-- card__author--default">Michael Ranson</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">I’m so proud</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" >
                    <a href="#" data-story-link="" data-story-id="modal-1478">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1478">
                                <source src="/media/5u5fzwat/sg_irene_loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--default">Irene Soulsby</div>

                        <div className="card__text card__text--white  card__text--default"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1468">


                        <Image src="/media/3zxj30tg/jasmine-maddison-i-played-at-the-opening.gif" alt="Jasmine Maddison –&#160;Brother" width={960} height={400} unoptimized />




                        <div className="card__author card__author--black card__author-- card__author--landscape">Jasmine Maddison</div>

                        <div className="card__text card__text--black  card__text--landscape"></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--portrait" >


                    <Image src="/media/etedj0lv/graham-orchard-james-brown-in-2005.gif" alt="Graham Orchard - james brown" width={480} height={800} unoptimized />




                    <div className="card__author card__author--black card__author-- card__author--portrait">Graham Orchard</div>

                    <div className="card__text card__text--black  card__text--portrait"></div>


                    <QuoteIcon fill="black" />




                </article>







                <article className="card card-size--landscape" >
                    <a href="#" data-story-link="" data-story-id="modal-1472">




                        <div className="card__video">
                            <video autoPlay loop muted playsInline preload="auto" id="video-1472">
                                <source src="/media/iutpot5y/sg_homepage_bbc-6-festival_loop.mp4" type="video/mp4" />
                            </video>
                        </div>



                        <div className="card__author card__author--white card__author-- card__author--landscape">Kristian Clark</div>

                        <div className="card__text card__text--white  card__text--landscape"></div>

                        <PlusIcon fill="white" />




                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#2cfc31' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1473">







                        <div className="card__author card__author--black card__author-- card__author--default">Jamie Mackay</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1"><span className="s1">After the song he smiled – it was incredible.</span></p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>







                <article className="card card-size--default" style={{ backgroundColor: '#c3fcfb' }}>
                    <a href="#" data-story-link="" data-story-id="modal-1601">







                        <div className="card__author card__author--black card__author-- card__author--default">Natalie Heath</div>

                        <div className="card__text card__text--black  card__text--default"><p className="p1">Collective shared joy</p></div>

                        <PlusIcon fill="black" />

                        <QuoteIcon fill="black" />



                    </a>

                </article>




            </section>

            <div id="modal-1944" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jen's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>The surprise of having Dilutey Juice absolutely rock a crowd to its core. Not a still person in the house. Amazing.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1938" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Joan's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>Being part of the Silver Breves gave me my first experience of singing in Hall one. Walking onto that stage filled me with awe as we retraced the footsteps of so many wonderful performers who were there before us. That was long ago and now for the most memorable and recent experience.</p>
                                    <p>It was singing in “The People’s Requiem” (Verdi’s Requiem) after weeks of long, sometimes exhausting, always exciting and enjoyable rehearsals, the time came for the performance. Singing Verdi’s Requiem accompanied by the Royal Northern Sinfonia, conducted by Dinis Sousa! The stuff dreams are definitely made of. The audience were astounded - shown by the seemingly never ending applause and the excited chatter heard as they left Sage Gateshead.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1939" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Steph's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>I’ve always wanted it to be a tradition when I had a family to come to see The Snowman at the Sage at Christmas. My dream finally came true and at Christmas 2021 we came - my husband, my little girl Bonnie and I. It was a magical moment and I look forward to continuing this special Christmas tradition. Thank you for all you do for families.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1940" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Judith's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>As I'm getting older my hearing is deteriorating - a combination of age and standing too close to the speakers in small venues in my youth. This means I can't enjoy live music so well anymore. But because of the great acoustics at The Sage I know I'm usually guaranteed a great performance no matter the genre.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1937" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Michael's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>In November 2021, I was in the chorus for the performance of The People's Requiem in Hall One. A fabulous and emotional experience. I lost my mother-in-law to Covid during the pandemic.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1942" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Victoria's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>The Guinness World Record on the Concourse for the largest cream tea party. So many scones.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1881" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Steve's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Richard Ashcroft playing Bitter Sweet Symphony. Life-affirming.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1880" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Hayley's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I met and got to sing with some lovely people and members of the Chorus. It was one of my favourite performances ever.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1879" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Eileen's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Proudest moment ever when my niece, Holly Clarke, played at the Sage for the first time. Thank you for all your support Sage Gateshead.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1878" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Gareth's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Watching Nick Lowe play guitar, on the same stage that I’ve played on, at an end of term event with the Tuesday night folk rock class.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1877" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Alison's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Treating my mum to the Bond night for her 70th birthday. People were dressed to impress but we felt like imposters! We fooled her into going into the foyer “because it’s open to the public” and handed her the tickets. Thrilled!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1886" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Cathy's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Playing Wagner’s Parsifal in such a fabulous acoustic gave me goosebumps. I will always remember it. <br /><br />Have long thought Sage Gateshead the best concert hall by miles.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1885" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Liz's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="fA6xzVTjvPs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Through lockdown, the camaraderie that was kept going was just a lifesaver. We supported each other in isolation, which was marvellous.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1887" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Lisa's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Sharing a night out with my best friend and watching her cry with emotion at numerous performances.</p>
                                    <p className="p1">Boney M being one of them – childhood memories and never thinking you would see them live.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1888" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Lauren's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Being able to see Stephen Fry’s Mythos, Heroes and Troy in a triple performance!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1890" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Matt's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">To perform great music with inspiring musicians in great halls designed to captivate audiences.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1894" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jamie's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I started working for Sage Gateshead back in 2004, when it first opened.</p>
                                    <p className="p1">I was 18 and was in awe of the amazing building. It reaffirmed my love for music and I have precious memories of my amazing colleagues, as well as the wonderful experiences I had at my time at Sage Gateshead. </p>
                                    <p className="p1">Music is definitely the language of the soul.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1891" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Julie's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I still have a feeling of witnessing something very special which is a huge understatement. I will never ever forget the Beethoven weekend, prior to the first lockdown. So very glad to have seen and heard every single part of it. </p>
                                    <p className="p1">Arriving at Sage Gateshead to see The Knife Angel and it being there for every concert. Brilliantly moving. The music was beyond doubt the best I have heard. I could not have asked for anything more. </p>
                                    <p className="p1">Thank you for such wonderful memories.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1892" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Coleen's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="uhfBEivEJs4" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’ve been with this group since 2007/8. I’d never sang before but I just love it here.</p>
                                    <p className="p1">Interestingly, my consultant asked if I was still singing because he thinks it’s extremely good for lung health.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1893" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    James' story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We’ve seen some amazing artists over the years at Sage Gateshead but the best moment is when my wife (Frances) and I got married there in 2014. We made music the central theme of our wedding and the playlist had guests on the dance floor mixing with people they’d only just met for hours.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1895" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Brian's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I think the building is now a massive part of the landscape of Gateshead and even standing outside of it you can’t fail to be impressed.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1896" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Clarence's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="POnot8syUWQ" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">This is a real beacon of high-quality playing, unique around the world. It doesn’t matter if someone has a disability – music makes a connection to all of us and people can create on all levels.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1897" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Isobel Hughes
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Sage is the opposite of not being taken seriously. It’s important to have someone else in your corner. You realise how people get to where they are: yes, it’s absolutely talent, but it’s who you’ve got around you and the resources.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1898" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Anna's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Vintage Trouble supporting Brian May and Kerry Ellis was the most electrifying performance I’ve ever seen in Sage One.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1899" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Beth's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I spend my days at Sage Gateshead, where I participate in various types of adult programme classes during the day and attend all the classical concerts, folk music and other sorts in the three halls in the evening. It is a second home.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1900" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Caroline's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I have so many wonderful memories of Sage Gateshead. I love the classical concerts, the diverse types of music – Blues, Jazz, Pop, so much!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1901" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Paul's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The Lau unplugged concert in February this year was superb.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1902" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Malcolm's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I hope audiences have a wonderful musical experience. I want them to see us on stage and know disabilities do not limit the level of creativity that we’re producing. </p>
                                    <p className="p1">We’re a happy bunch. We keep opening new doors, trying out new things. Sky’s the limit really.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1903" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    James' story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">It’s full of culture. You can learn all sorts and there’s entertainment for all ages.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1904" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Andrew's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Seeing people’s faces after the Gregory Porter gig was a highlight.</p>
                                    <p className="p1">If you’re lucky to have seen him live before, then you’d know. What a weekend!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1784" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Alfie's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The musical heart and soul vibe that you can feel throughout the whole building.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1804" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Mark's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Taking my four-year-old to a ‘Classics 4 Kids’ concert with RNS performing. He was mesmerised.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1810" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Murray's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I trained as part of the Centre for Advanced Training as a singer when I was 17 and I have so many wonderful memories of singing Schubert in the Northern Rock Foundation Hall!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1811" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    David's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Meeting life-long friends rehearsing for the BBC Proms in 2018. Magic!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1813" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Steven's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Just love the building when it is “buzzing” in every corner.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1814" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Nicola's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The intimacy offered by Sage One or Sage Two makes performances feel special for performers and audience.</p>
                                    <p className="p1">I’d rather see a performer play at Sage Gateshead than anywhere else because of the intimacy of the venue and the wonderful sound quality, not to mention the warmth of the audience.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1815" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Catherine's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hearing Bradley Creswick play the theme from Schindler’s List in Sage One. Incredible!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1816" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Enid's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The rich tapestry of music available there. There is literally something for every musical taste, all done to the highest standard. It is a privilege to come to Sage Gateshead every week to play my recorders and then to listen to some excellent RNS concerts.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1817" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    George's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">To walk into Sage Gateshead on a Thursday night carrying your instrument bag just gave such feeling of pride. Those nights spent learning and playing music were the highlight of the week for all of us. I have met lots of fantastic people who have become great friends; a love of the saxophone and music brought us all together.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1818" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Susan's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Pet Shop Boys a couple of years ago. This concert was one of many great nights at Sage Gateshead. It was an outstanding celebration of their music and, of course, it was a coming home concert for Neil Tennant.</p>
                                    <p className="p1">We enjoyed it with our son and it was a great night all round. Never to be forgotten!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1821" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Crispian's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">No matter when I go to Sage Gateshead or whatever the weather, I love standing on the balcony looking out over the river - a spectacular sight.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1822" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Enid's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I have sung in the Sage Gateshead Chamber Choir since 2006 and remember many happy memories</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1823" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Nicki's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I remember when it was being built thinking that Sage Gateshead would be just for highbrow Opera lovers and not for us - how wrong could I be? From your opening to his untimely death 8 years ago, my late husband and I attended more than 100 gigs together at our new favourite venue.</p>
                                    <p className="p1">There is now a seat in Sage One dedicated to his memory - ‘Music is the sound that love makes’. A special place with amazing memories, and hopefully many more to come.</p>
                                    <p className="p1">I love Sage Gateshead.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1824" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Emily's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">It is for everyone in the North East and offers a level of musical quality that no other venue can match. I really hope it stays that way.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1825" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Helen's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’ve spent a lot of time at Sage Gateshead. I was there the first night when we tested the acoustics. Played in a steel drum band with my husband and an eclectic mix of local people, which was the way I spent my Thursday nights for around five years.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1826" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Susan's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Favourite moment? Where do I start? Lars always. The first time I heard Julian Rachlin we knew that he was something special. Mahan Esfahani - love that harpsichord. The Beethoven weekend just before lockdown and just anything and everything with the RNS. <br /><br />All the joy you gave to my mum when she was alive; it was her favourite place too.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1827" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    David Auty
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hearing a large symphony orchestra for the first time. The clarity of the performance and being able to hear every instrument, from the smallest to the largest equally. The power great music has on your emotions.</p>
                                    <p className="p1">All this has been brought about by the supreme quality of Sage Gateshead’s acoustics. Performances are made by the quality of the musicians and by the quality of the sound engineers.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1828" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Matthew Weddle
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The chaotic nature of life, and its associated issues, seems to disappear when stepping over the threshold of Sage Gateshead. It’s the architecture, the location and the music but, most importantly the people who make it such a warm environment.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1830" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Phil Gray
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The best gig I’ve seen at Sage Gateshead (also the best gig I’ve seen anywhere to be honest) was Nick Cave and Warren Ellis!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1711" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jacqui's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Coming out of lockdown and bringing together amateur and professional musicians at The People’s Requiem, to remember those we lost, was incredibly moving.</p>
                                    <p className="p1">Sage Gateshead has been part of watching our children grow up - from listening to our daughter sing in Quay Lasses, pacing the corridor during piano exams, or celebrating Christmas with a trip to The Snowman. It’s woven into our family history.</p>
                                    <p className="p1">I want to see the experiences our family had on offer to all families across the region - and I want to continue to be able to hear world-class performers in an amazing venue without having to leave the North East.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1726" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Terri's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">It’s an amazing venue for music of all kinds. I have attended many events here - it’s my favourite local venue.</p>
                                    <p className="p1">From 2018, meeting up and dancing in the foyer with all of my Orbital pals from all over the country. I only ever bump into them all at Orbital gigs throughout the country. It was an amazing gig and I was won over by the foyer being used as a venue. Please come back and repeat!</p>
                                    <p className="p1">Underworld performing Dubnobasswithmyheadman in 2015, in its entirety. This was on my made-up list of perfect gigs and when the tickets were announced it was like my dream came true! They were tremendous in every way possible.</p>
                                    <p className="p1">Lemon Jelly was my first ever Sage Gateshead gig in 2005 and it paved the way for many gigs to follow over the years. I was astounded at how perfect the music sounded, and the fact that Lemon Jelly held a game of bingo. They were amazing and I miss them.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1737" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Neil's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">They say never meet your hero it can only lead to disappointment, but in my case it was because it turns you into a jibbering wreck . The person in question was Booker T Jones who signed albums after the gig. The guy has played on every Stax hit and I’m meeting him. So I’m standing to meet him and get the album signed. It’s a cold day but I’m getting hotter and hotter, my shirt is soaking. Finally I meet him shake that hand that has played on some of the greatest songs ever. He played with Otis Redding, my god, and I shook his hand. </p>
                                    <p className="p1">He was so magnanimous in those few minutes I had with him - a real gentleman. I asked him in my best Geordie accent if he ever met up with their “rivals” the Funk Brothers who played on all the Motown hits. Not sure he really understood me, but he simply said they were all good friends despite working for rivals - very diplomatic. So with album in hand, my soaking shirt and I left with a huge grin on my face, off into to the welcome chill of the night air.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1738" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Maureen's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Stunning design and acoustics, the variety of performances, musical genres and opportunities to learn. My memories include shaking James Brown’s hand from the front row, learning to play ukelele and seeing Grace Jones hula hoop.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1739" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Christine's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">This is a building which is set in the future and will not date in many a lifetime. I would like it to accept future performances from musically-minded people and performers.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1740" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Moya's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The memory that stays with me was looking over to see my 20 year old son totally enthralled with tears dripping off his chin - such a moving, memorable experience. The acoustics were fabulous.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1741" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Darren's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Mark Lanegan in Sage Two - this venue is so perfect. Lanegan says little, sings a lot and pulls you in to the music. Add to this the vibe of Sage Two and for 90 minutes I don’t feel like I’m watching a performance, I feel part of the performance. Perfect, perfect, perfect. Then Lanegan dies and this is the last time I got to hear him sing live.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1742" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Debbie's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">My dad was the tower crane operator who helped build Sage Gateshead and lowered all the panes of glass. Every time I see it I think of how proud I am of him. He has now been retired for over 10 years and later went on to display his art at St Mary’s Heritage Centre.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1743" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Josie's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>My mam works there and it makes the building more special for me. I also remember at Christmas, there were lasers and the first job I wanted to do was to control the Sage Gateshead lasers.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1744" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    David's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I get very moved and proud when attending a concert at Sage Gateshead. My two favourites have to be Nik Kershaw and Howard Jones. My wife and I attended both, and at 56 to be singing along to songs that provided the soundtrack to my late teens and early twenties, and still remembering all the lyrics like it was yesterday, had me in tears. </p>
                                    <p className="p1">England over the decades has produced amazing talents, and these two in my view rank among the best. </p>
                                    <p className="p1">Best wishes with your decision making and for Sage Gateshead’s future in our homeland. I’m very proud to be a Geordie, and Sage Gateshead and the quayside is two of the reasons why, along with Sting, Mark Knopfler and Lindisfarne. Haway the lads!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1745" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jan Marie's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Coming back up North - the sight of Sage Gateshead, awesome, familiar and always smiling.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1746" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Lauren's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The diversity of performances, the chance to see something new. The support of local and international musicians and the emphasis on classical performances. There’s nowhere else that I can think of that can beat the diverse and exciting programming in 100 miles! The acoustics, the atmosphere, the beautiful building. Memories of going here for all of my young adult / adult life. </p>
                                    <p className="p1">A truly special place and a place to go at special times.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1750" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Joyce's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Seeing my all time favourite band Crosby Stills &amp; Nash. When they sang Suite: Judy Blue Eyes as an encore I couldn’t speak for some time after! Sitting there with all my friends around me; listening to them sing an all time classic of mine for over 40 years. Sharing that with friends, who I have listened to it many times with throughout our lives, was one of the most amazing moments of my life.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1749" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Robyn Taylor McEwan
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We publish videos from independent artists weekly, giving them a platform on our channels.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1752" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Steven's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">More of the same diversity and an expansion of this. Encouraging people to break through the mental barriers they have to embrace music that is not their mainstream listening. We are so fortunate here - whatever it gets called in the name change.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1753" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jeff's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>I was with Streetwise Opera and performed regularly. I especially enjoyed the performance of Tell Me The Truth About Love.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1756" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Aly's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I sang with the Inspiration Choir and the RNS but watching my daughter, who was a child at the time, walk in to Sage One with an armed forces veteran to pass on a poppy for the Remembrance concert, was very moving. </p>
                                    <p className="p1">Sage Gateshead is a place that has fostered my love of singing - an amazing mindfulness tool which has helped me through some tough battles in my life. This is where I have some amazing memories and is a place I have met good friends with a common love of singing.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1757" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    John's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We come every year to see the Transatlantic Sessions concert which we always enjoy, an opportunity to see world-class folk musicians playing together.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1278" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Isabelle's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="CG5BWGvIL7Y" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m Isabelle and started at Sage Gateshead recently. I’ve recently auditioned to go to a music school in Manchester and I’ve received a lot of wonderful support from the staff that I am associated with here. I have a lot of feeling of family here.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1280" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    John's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="2U1Vw8yUPY4" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">My name’s John, I’ve been coming to concerts at Sage Gateshead since it very first opened. But my outstanding memory is of the day it re-opened after lockdown, and I came to see the People’s Requiem - the Verdi Requiem - and my wife was in the choir. From the first chord onwards I filled up, and throughout the whole performance I was the same, I was full of tears. And it was just coming back together as part of the community and hearing such creativity and such joy, it was a wonderful place to be that night. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1283" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Katherine's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p><a rel="noopener" href="https://twitter.com/realkiefer/status/1012711499414945792?lang=en" target="_blank" data-anchor="?lang=en">Kiefer Sutherland tweeted</a> about Greggs and within the hour there was a massive Greggs delivery at the stage door.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1285" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Matt's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>


                            <div className="story__image">
                                <Image src="/media/5keh4tv5/in_harmony_pupils_19-e1552338878400.webp" alt="Matt Wigley - Story" className="story__img" width={1734} height={1153} />

                            </div>

                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The In Harmony Performance and BBC coverage was one of the most heartwarming experiences I’ve had at SG.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1287" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Hannah's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Performing as a backing vocalist for Efterklang (rock band) and Royal Northern Sinfonia with John Grant supporting and Budgie (BUDGIE!) on drums.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1290" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Sue's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>


                            <div className="story__image">
                                <Image src="/media/ou3lhb3v/sue-newton-magic.webp" alt="Sue Newton –&#160;Magic STORY" className="story__img" width={1900} height={819} />

                            </div>

                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The acoustics of the building and the beauty. Watching customers’ faces when they first enter the halls. Magic.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1291" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Anne's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We are a collective of music lovers - different ages, different skills. That’s what Sage Gateshead is all about.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1293" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Rob's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">One of my highlights has to be watching ET with a live orchestra.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1295" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Helen's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="POnot8syUWQ" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We created a new ensemble - RNS Moves - a place for disabled and non-disabled musicians to perform together at the highest level alongside the Royal Northern Sinfonia.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1297" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Vee's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I really enjoy visiting the Music Education Centre at Sage and seeing how engaged the youngsters are.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1302" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">

                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>


                            <div className="story__image">
                                <Image src="/media/jkudx5os/ross-millard-orbital-story.webp" alt="Ross Millard –&#160;Orbital – Story" className="story__img" width={1900} height={1069} />

                            </div>

                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Orbital performing on the concourse was a stand-out moment for me. To take a ‘rave’ scenario and put it on the concourse really brought the place to life in a very contemporary way.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1331" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Lynne's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="hBtIW8NWF4w" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi, I’m Lynne and my moment was when Lars Vogt played the Goldberg Variations just for me, and none of the other people in the hall.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1311" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Rob's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="EY7hwBs4cQE" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m Rob Williamson, I’m Chief Executive of the Community Foundation, Tyne and Wear, and Northumberland, one of Sage Gateshead’s major funders. We are hugely proud in the region to have Sage Gateshead here and to have the largest arts endowment outside London, as I understand it; supporting arts education and participation, and brilliant entertainment, right here on the banks of the Tyne. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1309" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Robyn's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Seeing Diversity rehearsing outside on the street before they went on stage (probably filming a TikTok too).</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1313" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Emma-Louise's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="GW_dQm4hrDs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Our group for people over the age of 50 got together and wrote a song during lockdown called We’ve Got Time On Our Hands. It shows what a lifeline our classes are for friendships and community.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1317" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Graham's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Johnny Vegas stage diving into a seated auditorium at a Teenage Cancer Trust gig.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1315" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Louise's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Seeing young people from all across the region perform in Sage One for CoMusica’s 10th birthday with face paints, costumes and confetti cannons is something I will always remember.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1337" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Beverley Knight
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>


                            <div className="story__image">
                                <Image src="/media/vzmdro0q/beverley-knight.webp" alt="Beverley Knight – Story" className="story__img" width={556} height={331} />

                            </div>

                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The After Dark Festival is fresh and invigorating. It was great to see new audiences use the building in different ways.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1340" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jack's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Kae Tempest in Sage One – Top five all-time gigs EVER.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1322" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Lynne's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I watched The Messiah signed in British Sign Language and had a new and wonderful sensory experience.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1320" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Alex's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Supporting Talisk, my favourite band, on the stage at Sage One this year is the highlight of my life so far. I’ve been playing here since I was six years old.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1324" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jessica's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="SHR6nQNc7ac" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi my name’s Jessica, and this was the first place that I ever played in front of a live audience. I came to The Sage when I was around 8 years old, and I’ve been coming here ever since. I came here to do music lessons and to play in the young musicians programmes and In Harmony, which is a project that gives young children the chance to play an instrument and really discover themselves. </p>
                                    <p className="p1">I personally love The Sage because this is a place that helped to build my confidence and who I am. Without music I wouldn’t be able to express myself the way that I can right now, so I feel that The Sage is a very unique and meaningful place and I really love the unity and the diversity. I love how everyone comes here to do one thing; when you’re on the school bus and you’re coming to The Sage to come play your instruments and you’re unpacking your instruments and just the excitement of getting on the stage and playing – that togetherness, no matter where you come from, who you are, your gender, whatever, just coming here to play altogether and do one synchronised thing is a really beautiful thing and I think it is an example of what the world should actually be like, I feel like Sage is an example of how I feel the world should be.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1348" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Peter's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="ZmkPs4SSQXs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">My name’s Peter Woolford. </p>
                                    <p className="p1">I’m a regular here, coming mostly to see the Royal Northern Sinfonia. I’ve had some fantastic experiences learning about classical music but my favourite from them are the Star Wars nights – absolutely the best. You see the orchestra come out and the conductor’s conducting with the lightsaber. It’s the best and it will bring in a lot of interest when people come here and they can learn from it because then they can go back and see a different experience with classical music, and with the rock music that plays in this venue as well.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1349" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jim's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’ve supported the orchestra since it first formed in 1958. I think I might be the longest serving member on the RNS Friends Committee.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1381" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Helen's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We celebrated Beethoven’s 250th birthday with four visiting orchestras and the Royal Northern Sinfonia performing all of his symphonies - and more - in two days.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1359" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Mike's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="YkqaMu6fZNs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m Mike Ranson, I think Sage Gateshead is a wonderful venue in the North East and the way it supports children and young people to make music and learn about music is fantastic.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1364" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jane's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The Royal Northern Sinfonia come into school and really inspire the kids. We have brass days, string days, the kids can see them perform, sit alongside them, practise with them. It’s brilliant.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1371" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Janette's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>


                            <div className="story__image">
                                <Image src="/media/c20hsbgj/screenshot-2022-06-14-at-21-01-25.webp" alt="Janette Atkinson – BBC 6" className="story__img" width={1796} height={1192} />

                            </div>

                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">People still talk about the BBC 6 Music Weekend - a very memorable event across the whole building.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1374" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Gwen's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="7LLAZuacbEQ" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi I’m Gwen, and what I love about Sage Gateshead is that you can perform anything here; it can be dance, music - any type of music - and it’ll always be good. </p>
                                    <p className="p1">One of my favourite memories is when I performed here with my school, I was about 10 and it was the first time I’d ever sung in front of other people, and it was really special - I’ve loved coming here. I’ve been coming here since I was little, my mum came here when she was pregnant with me, so it’s always been a part of my life and it always will be. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1375" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Josh's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Sage Gateshead helped me learn how to play the Northumberland pipes in my scout group when I was 11. We were a group of friends, laughing, getting it wrong, and learning in a fun way.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1357" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jim's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">John Lill playing Beethoven’s 3rd Piano Concerto with the Royal Northern Sinfonia.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1377" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">

                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="HgL753SFlNk" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hello, I’m Wendy Holland. I’ve been a participant in the community music programme since 2008. </p>
                                    <p className="p1">I’ve enjoyed participating in a lot of genres of music; things I would never have thought of participating in, like being in a rock group. I’ve enjoyed performances in Sage One, both attending and being on the stage as well. I’ve also been an ambassador for the programme and have done research into what the successes are of the community music programme. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1379" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    David's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">There are so many different experiences here - from music education and communities getting together, to raucous performances you might not expect, to ordinary people on stage supporting a live artist, and then there’s the incredible Royal Northern Sinfonia.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1383" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Sara's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="aXqlNwDMQMM" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The People’s Requiem - stunning performance of Verdi’s Requiem, the quality was incredible and it was one of the most amazing and emotional things I’ve ever done.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1384" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Roger's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">When Lars Vogt fell ill, the RNS played without him for the first half of the performance, as the replacement conductor - Peter Donohoe - hadn’t yet arrived. That was an amazing feat in itself. Then when he finally made it on stage, having never met the orchestra and with no rehearsal, they played Beethoven’s Emperor Concerto - and it worked. It was absolutely extraordinary.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1386" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jackie's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’ve learned so much about the power of music and the impact it has on people’s lives. I’m so proud of the success stories that come out of our learning programme.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1388" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Vanessa's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="dCoekNM5f00" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi, I’m Vanessa, and what I love about Sage Gateshead is the place that it is for me and the things that it holds for me, the community that it has and the things that I get to do here. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1391" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Tim's story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">When I drive up the A1, I’m more happy to see the three ‘lumps’ of this building on the horizon than any other North East landmark. To me, it’s the most iconic of them all.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1392" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Chris' Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="2fRYMFQxEt4" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi my name’s Chris. I had the great honour to sing with Bobby McFerrin on this very stage!</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1394" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Ross' Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="V1BTId899xc" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hello, I’m Ross Millard, I’m a musician from the area. Some of the more special moments in Sage Gateshead for me have been the concerts or festivals that have confounded our expectations as audience members. Thinking particularly of Orbital performing on the concourse and it being kind of wild and an amazing light show, full of bodies. The Americana festival, which brings the whole space to life, including the outside area, and some of those other festival moments. The Jazz Festival, where you get all sorts of eccentric, wild performances in all of the different spaces. Tusk, which has been housed here for about 5 years now, and is a really valuable aspect of the Sage programme…just quite amazing to think all of those performances can happen under one roof. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1401" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Phil's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We’ve created some wonderful communities here at Sage Gateshead, where people use music to cope with everyday struggles, loss and health issues.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1405" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Simon's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’ve been coming here since it opened and love classical and folk music. One of my most memorable moments was seeing Rhiannon Giddens play here.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1407" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Marzuqah's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="7HMRIAW9MWs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi, my name’s Marzuqah and my favourite moment in Sage Gateshead was when it first started and In Harmony first came to Hawthorn Primary School. They told us we could come to Sage Gateshead for an opportunity to try out new instruments, so I came with my family and we tried out lots of new instruments and ever since then I’ve been playing an instrument. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1409" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jim's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">It’s a hugely welcoming place. I saw Roger Norrington in his last ever performance here, and he encouraged the audience to applaud wherever they liked.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1411" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jack's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="ZwHA9gvYlWk" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi I’m Jack. This venue is hugely important to me; it’s a huge source of pride that we have such a beautiful, brilliant, amazing sounding venue, right here in Tyneside - and I just love coming here. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1412" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Paul's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I was very grateful for all the online sessions Sage Gateshead provided during lockdown. It’s really important even now as it gives lots of people access to the building who might not otherwise be able to get here.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1415" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Irene's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>


                            <div className="story__image">
                                <Image src="/media/gq2bfyng/irene-soulsby.webp" alt="Irene Soulsby –&#160;Story" className="story__img" width={1200} height={683} />

                            </div>

                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I still have the postcard from the performance at the Queen’s official opening of the building.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1417" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Joanne's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Seeing Nick Cave perform Cosmic Dancer in Sage Two and shedding a tear.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1418" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Michael's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">For me it’s the versatility of the place in how it can stage different performances. A highlight for me is seeing different operas here and how beautifully presented they are.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1423" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Laura's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>


                            <div className="story__image">
                                <Image src="/media/rcabgfoi/laura-hague.webp" alt="Laura Hague – Story" className="story__img" width={1094} height={570} />

                            </div>

                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I saw Father John Misty here with my friends and they were blown away by the building. It’s not just your usual arena.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1425" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Sam's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The first time I saw the orchestra live it was like being on a rollercoaster. I had butterflies - it was amazing.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1430" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Alex's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="d146H_uK73Y" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hi my name’s Alex and I’ve been coming to Sage Gateshead for 18 years. My first experience was when I was literally a few months old and I’ve been coming pretty much every week since. </p>
                                    <p className="p1">I started off doing baby classes, then went on to actual ensembles, and now this year I’m off to university and I will be studying at Newcastle University. Sage Gateshead will still continue to be a performance place for me and the place that I will always visit, so it has huge, huge sentimental memories and value to me.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1437" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jessica's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">So many lush events make me proud to work here - Sam Fender &amp; RNS, Verdi’s Requiem &amp; The People’s Choir, Gateshead Schools Dance Festival and In Harmony.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1434" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Judith's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="I’ve come to see so many different things here -  I’ve got the bug for Sage Gateshead." title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">

                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1431" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">

                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="jgjs-48gKiE" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m Sarah Thackray from Beaconhouse Events, and this building to us is incredible for conferences and events. We bring international delegations across and they’re just blown away by the building itself and the location in the centre of Newcastle/Gateshead. It’s stunning and it offers so much inspiration to people who come here. It’s not just another conference hotel, it’s an amazing building with amazing outlooks, so we love it. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1403" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Lucy's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Seeing Zappa Plays Zappa in Sage Two with my mam. I’m a lifelong Zappa fan and it was lovely to share his music, live, and convert her. What a night.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1439" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Christine's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Sage Gateshead is open to all, it’s non-judgemental and there are so many opportunities to learn new things. I’ve made a network of amazing friends, linked by music.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1441" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Hannah's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="PEsu_tvIe9s" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">We set up a digital learning platform and ensured continuation of learning for 200 children during lockdown.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1442" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Paul's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’ve sung here for the last 10 years with Streetwise Opera. I think I have sung in every auditorium in this building. I was very grateful for all the online sessions Sage Gateshead provided during lockdown. It’s really important even now as it gives lots of people access to the building who might not otherwise be able to get here.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1444" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">

                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="I-LtIx_-uRI" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m Vee Pollock, I’m the Dean of Cultural and Creative Arts at Newcastle University. Sage Gateshead is such a fantastic venue, particularly for encouraging and growing new and emerging talent across generations, and the work it does with all sorts of communities is fantastic.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1445" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Feitong's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="eqvrtTziOEA" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hello my name is Feitong and the best thing about Sage Gateshead is its programmes and performances that you can watch. I am associated with Sage Gateshead through the Young Musicians Programme, which helps to develop my confidence and my musical ability.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1447" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Christine's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="ir0v2eGCCQs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Hello, I’m Christine Ogg, and this is the place where I had a lightbulb moment; I came to a sharing performance where some people were drumming and I thought, that is what I want to do, and I’ve been doing it ever since. I’ve made many good friends and have had many happy memories doing so, so long live this building.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1452" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Sylvia's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">Opening night was amazing - I remember feeling immensely proud to work here and just being in awe of the building itself and all the activity taking place within it.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1453" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Joanne's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>I've worked here since I was 17. I have always loved music and Sage Gateshead has inspired me to study music and work in a field that I love.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1455" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Peter's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p>I saw Rufus Wainwright play his first gig here when Sage Gateshead first opened. He said ‘this is a new concert hall and it’s supposed to have amazing acoustics. Let’s test it.’ He asked the band to stop playing and filled the space with just his voice. It blew the audience away.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1458" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Josh's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="hzWG_onQ9Zs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m Josh. I first came into contact with Sage Gateshead through my grandad bringing me to The Snowman performance here, and from then I played in Sage One, Sage Two, and The Northern Rock venue through various school bands. Being involved in the musical development side, on the odd occasion through different community groups - never once picked up an instrument since leaving school but was involved from a business point of view and it’s been incredible to make friends old and new in this place. Appreciate the acoustics, the infrastructure and dedication of everyone in this place.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1463" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Sam's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="zLMA46ryk48" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">The first time I came to Sage Gateshead was the first time I saw an orchestra, and it really inspired me to go see more classical music and more orchestral pieces. It just gave me a huge feeling of butterflies and ever since I’ve been coming back and listening to the orchestra. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1461" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    John's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="rQuM72uD7xw" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m John Shipley and I’ve been coming to classical concerts here since it opened. It’s the most wonderful, relaxing experience to be in Sage One, particularly with the Royal Northern Sinfonia playing. A hugely exciting place to come to, wonderfully welcoming and the highest quality. It was particularly good for me when we ran Open University degree ceremonies (I worked with the OU) and we used to hold them here in the latter days of my time with the university. And it’s a wonderful venue for people. So much space to walk around in, to sit in, to have a coffee – high quality catering – but the most wonderful hall with the most fantastic acoustics. A world-class venue. </p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1475" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Judith's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I didn’t listen to classical music at home, but when I come here I love it - it’s just the incredible sound of those instruments all playing together.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1476" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">

                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I’m so proud to support programmes for young people like In Harmony and the Youth Music Programme.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1478" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Irene's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="jVeZcVm6a0s" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">My name’s Irene Soulsby and a memorable performance here was of The Snowman, with the Northern Sinfonia, and we saw the animated Snowman film and it was so beautiful I cried my eyes out.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1468" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jasmine Maddison
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">I played at the opening event, along with my younger brother, as part of the Gateshead Youth Orchestra. It was a wonderful moment.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1472" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Kristian's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>

                            <div className="story__video">
                                <YouTubeEmbed videoId="4Pxl2381TRs" title="YouTube video player" />
                            </div>


                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">BBC 6 Music Festival – transformed the whole building with performances in all the halls plus the concourse.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1473" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Jamie's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">A participant attended a guitar class of mine, we had worked together for a while. At the start of the group session I asked if he was OK. He explained to the group how he had lost his mother a few days ago. We talked about it and decided to play ‘Isn’t She Lovely’ together. He played a solo on it while tears rolled down his face. After the song he smiled - it was incredible.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>

            <div id="modal-1601" className="modal">
                <div className="modal-grid">

                    <div className="modal-content">
                        <span className="close">×</span>

                        <article className="story">

                            <div className="story__header">
                                <div className="story__title">
                                    Natalie's Story
                                </div>

                                <div className="story__share">

                                    <i className="fa-solid fa-share"></i>
                                    <a href={`https://www.facebook.com/sharer.php?u=${SITE_URL}/&quote=@Sage_Gateshead sgchanges`} target="_blank" rel="noopener" aria-label="Share on Facebook"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>

                                    <a href={`https://twitter.com/share?text=@Sage_Gateshead&amp;hashtags=sgchanges&amp;url=${SITE_URL}/`} target="_blank" rel="noopener" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>

                                </div>
                            </div>



                            <div className="story__article">
                                <div className="story__quote-top">
                                    <Image src="/_assets/img/quote-left.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                                <div className="story__text rte rte--white">
                                    <p className="p1">My first full-house contemporary gig after the pandemic, and being back to live music, was a collective shared joy.</p>
                                </div>
                                <div className="story__quote-bottom">
                                    <Image src="/_assets/img/quote-right.svg" width={65} height={57} unoptimized alt="" />
                                </div>
                            </div>
                        </article>


                    </div>
                </div>
            </div>


        </>
    )
}
