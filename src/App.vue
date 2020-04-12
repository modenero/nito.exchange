<template>
    <main>
        <Header />
        <Intro />
        <Highlights />

        <div id="location" class="section no-padding-top">
            <div class="container">
                <div class="col block-centered text-align-center lg-6 md-12">
                    <h2>Cloud locations</h2>
                    <div class="text-medium low-text-contrast margin-bottom">The global reach and the local presence you need</div>
                </div>
            </div>
            <div class="container">
                <div class="col lg-12 position-relative"><img src="images/worldmap.svg" alt="" class="opacity-20">
                    <div class="c-map__pin pos4">
                        <div class="iconfont is-14px is-map-pin"><em class="iconfont__no-italize"></em></div>
                        <div class="c-map__infobox">
                            <h4>Dallas, USA</h4>
                            <div class="text-small">Duis mollis, est non commodo luctus, nisi erat porttitor ligula</div>
                        </div>
                    </div>
                    <div class="c-map__pin pos3">
                        <div class="iconfont is-14px is-map-pin"><em class="iconfont__no-italize"></em></div>
                        <div class="c-map__infobox">
                            <h4>Paramaribo, Suriname</h4>
                            <div class="text-small">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. </div>
                        </div>
                    </div>
                    <div class="c-map__pin pos6">
                        <div class="iconfont is-14px is-map-pin"><em class="iconfont__no-italize"></em></div>
                        <div class="c-map__infobox">
                            <h4>Tohoku, Japan</h4>
                            <div class="text-small">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia </div>
                        </div>
                    </div>
                    <div class="c-map__pin pos2">
                        <div class="iconfont is-14px is-map-pin"><em class="iconfont__no-italize"></em></div>
                        <div class="c-map__infobox">
                            <h4>Mecca, UAE</h4>
                            <div class="text-small">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. </div>
                        </div>
                    </div>
                    <div class="c-map__pin pos5">
                        <div class="iconfont is-14px is-map-pin"><em class="iconfont__no-italize"></em></div>
                        <div class="c-map__infobox">
                            <h4>London, UK</h4>
                            <div class="text-small">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. </div>
                        </div>
                    </div>
                    <div class="c-map__pin">
                        <div class="iconfont is-14px is-map-pin"><em class="iconfont__no-italize"></em></div>
                        <div class="c-map__infobox">
                            <h4>Surabaya, Indonesia</h4>
                            <div class="text-small">Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="features" class="section has-bg-accent">
            <div class="container flexh-align-center margin-bottom-double">
                <div class="col lg-5 alignself-center md-12">
                    <div class="pre-title">Solutions For Every Business</div>
                    <h2 class="margin-bottom-double">Infrastructure for any vertical businessess</h2>
                    <ul class="c-checklist">
                        <li class="c-checklist_item margin-bottom"><strong class="is-heading-color">Run Without Surprises</strong>
                            <br>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</li>
                        <li class="c-checklist_item margin-bottom"><strong class="is-heading-color">Perfect for CI/CD and Build Jobs</strong>
                            <br>Maecenas faucibus mollis interdum vestibulum id ligula porta felis euismod semper.</li>
                        <li class="c-checklist_item margin-bottom"><strong class="is-heading-color">Predictable Performance</strong>
                            <br>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet </li>
                    </ul><a href="index.html#" class="cta-link margin-left-32px"><span class="margin-right">View more features</span> <span class="fa c-cta1_arrow-hovered"></span> <span class="fa c-cta1__arrow-normal"></span></a></div>
                <div class="col lg-1 no-margin-bottom"></div>
                <div class="col lg-6 md-12 order-first"><img src="images/dashboard.jpg" srcset="images/dashboard-p-500.jpeg 500w, images/dashboard.jpg 800w" sizes="(max-width: 479px) 90vw, (max-width: 851px) 94vw, (max-width: 991px) 800px, 45vw" alt=""></div>
            </div>
            <div class="container flexh-align-center">
                <div class="col lg-6 md-12 order-first"><img src="images/dashboard2.jpg" srcset="images/dashboard2-p-500.jpeg 500w, images/dashboard2.jpg 800w" sizes="(max-width: 479px) 90vw, (max-width: 851px) 94vw, (max-width: 991px) 800px, 45vw" alt=""></div>
                <div class="col lg-1 no-margin-bottom"></div>
                <div class="col lg-5 alignself-center md-12">
                    <div class="pre-title">Intuitive dashboard and interface</div>
                    <h2>Powerful Control Panel </h2>
                    <div class="margin-bottom-double">Dedicated CPU instances run on their own CPU cores in the Superly infrastructure. No sharing the processor with other Linodes.</div>
                    <div class="container container-nested margin-bottom">
                        <div class="col lg-6 no-margin-bottom">
                            <ul class="c-checklist">
                                <li class="c-checklist_item">DNS management</li>
                                <li class="c-checklist_item">API &amp; CLI</li>
                                <li class="c-checklist_item">99.9% Uptime SLA</li>
                                <li class="c-checklist_item">IPv6 Support</li>
                                <li class="c-checklist_item">Worldwide Availability</li>
                            </ul>
                        </div>
                        <div class="col lg-6 no-margin-bottom">
                            <ul class="c-checklist">
                                <li class="c-checklist_item">Backup</li>
                                <li class="c-checklist_item">Snapshot</li>
                                <li class="c-checklist_item">Firewall</li>
                                <li class="c-checklist_item">Flexible routing</li>
                                <li class="c-checklist_item">DDos protection</li>
                            </ul>
                        </div>
                    </div><a href="index.html#" class="cta-link margin-left-32px"><span class="margin-right">View more features</span> <span class="fa c-cta1_arrow-hovered"></span> <span class="fa c-cta1__arrow-normal"></span></a></div>
            </div>
        </div>
        <div class="section position-relative">
            <div class="container">
                <div class="col block-centered text-align-center lg-6 md-12">
                    <h2>Deploy an instance with Suprly</h2>
                    <div class="text-medium low-text-contrast margin-bottom">A powerful infrastructure solution for CPU-intensive applications such as video encoding, machine learning, and data analytics processing.</div>
                </div>
            </div>
            <div class="container position-relative md-margin-bottom">
                <div class="c-process__line hidden-md"></div>
                <div class="col lg-4 md-12">
                    <div class="margin-bottom-double text-align-center"><img src="images/host-icon-1.svg" width="128" alt=""></div>
                    <h3 class="text-align-center">Team Management</h3>
                    <div class="text-align-center">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. </div>
                </div>
                <div class="col lg-4 md-12">
                    <div class="margin-bottom-double text-align-center"><img src="images/host-icon-6.svg" width="128" alt=""></div>
                    <h3 class="text-align-center">Enable Single Sign-On</h3>
                    <div class="text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliqueterat porttitor ligula, eget lacinia odio sem nec elit.</div>
                </div>
                <div class="col lg-4 md-12">
                    <div class="margin-bottom-double text-align-center"><img src="images/host-icon-4.svg" width="128" alt=""></div>
                    <h3 class="text-align-center">Manage API Access</h3>
                    <div class="text-align-center">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis </div>
                </div>
            </div>
            <div class="container">
                <div class="col lg-12 flexh-justify-center">
                    <a href="index.html#" class="button-primary animated is-small w-inline-block">
                        <div class="button-primary-text">Deploy now</div>
                        <div class="button-primary-text for-hover">let&#x27;s go <span class="fa margin-left"></span></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="section bg-section position-relative">
            <div class="container">
                <div class="col lg-6 md-12 order-first no-margin-bottom"></div>
                <div class="col lg-1 no-margin-bottom"></div>
                <div class="col lg-5 alignself-center md-12">
                    <h2>Proud to offer the best price-to-performance cloud computing</h2>
                    <div class="margin-bottom-double">Since 2013, making cloud computing more affordable has been core to our mission. Over the last 6 years, we have optimized our server, hosting, and compute services to deliver the performance developers demand at a price they love.</div>
                    <div class="container container-nested margin-bottom">
                        <div id="counter" class="col lg-6 xs-12">
                            <div class="heading-beta is-xthin"><span data-count="99.9" class="counter-value">0</span>%<span class="font-size-normal"></span></div>
                            <div>Uptime SLAs</div>
                        </div>
                        <div class="col lg-6 xs-12">
                            <div class="heading-beta is-xthin"><span data-count="600" class="counter-value">0</span>K+<span class="font-size-normal"></span></div>
                            <div>Customer Worldwide</div>
                        </div>
                    </div>
                    <div class="container container-nested">
                        <div class="col lg-6 xs-12">
                            <div class="heading-beta is-xthin"><span data-count="100" class="counter-value">0</span>%<span class="font-size-normal"></span></div>
                            <div>Independent</div>
                        </div>
                        <div class="col lg-6 xs-12">
                            <div class="heading-beta is-xthin"><span data-count="85" class="counter-value">0</span>B<span class="font-size-normal"></span></div>
                            <div>eCommerce transactions</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-decoration-left hidden-md"><img src="images/isometric-server.jpg" srcset="images/isometric-server-p-1080.jpeg 1080w, images/isometric-server.jpg 1300w" sizes="(max-width: 991px) 100vw, 1040px" alt="" class="c-decoration-left__image"></div>
        </div>
        <div id="pricing" class="section">
            <div class="container">
                <div class="col block-centered text-align-center lg-6 md-12">
                    <h2>Simple pricing</h2>
                    <div class="text-medium low-text-contrast margin-bottom">Start your free trial, no credit card required</div>
                </div>
            </div>
            <div class="container">
                <div class="col lg-4 md-12">
                    <div class="c-pricing h100 margin-bottom-double">
                        <div class="c-pricing__inner h100 flexv-space-between">
                            <div class="c-pricing__top">
                                <div class="flexh-space-between">
                                    <div class="size-h4 margin-bottom">Starter</div><img src="images/host-icon-5.svg" width="64" alt="" class="alignself-top"></div>
                                <div class="c-pricing-price2">$7</div>
                                <div class="container container-nested">
                                    <div class="col lg-12 margin-bottom-small">
                                        <div class="hr is-on-white"></div>
                                    </div>
                                </div>
                                <div class="text-small is-bold margin-bottom-quad">Per month</div>
                                <div class="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form">
                                        <input type="submit" value="Join" data-wait="Please wait..." class="button-primary is-fullwidth w-button">
                                    </form>
                                    <div class="success-message w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div class="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-small text-align-center">Free trial for 14 days. <a href="index.html#">Term of service</a></div>
                        </div>
                    </div>
                    <ul class="c-checklist padding-left">
                        <li class="c-checklist_item"><strong>1GB</strong> RAM</li>
                        <li class="c-checklist_item"><strong>1 Core</strong> Processor</li>
                        <li class="c-checklist_item"><strong>25GB</strong> SSD Storage</li>
                        <li class="c-checklist_item"><strong>1TB</strong> Bandwidth</li>
                        <li class="c-checklist_item">Unlimited App’s</li>
                        <li class="c-checklist_item">24×7 Support</li>
                    </ul>
                </div>
                <div class="col lg-4 md-12">
                    <div class="c-pricing h100 margin-bottom-double">
                        <div class="c-pricing__inner h100 flexv-space-between">
                            <div class="c-pricing__top">
                                <div class="flexh-space-between">
                                    <div class="size-h4 margin-bottom">Cloud compute</div><img src="images/host-icon-4.svg" width="64" alt="" class="alignself-top"></div>
                                <div class="c-pricing-price2">$19</div>
                                <div class="container container-nested">
                                    <div class="col lg-12 margin-bottom-small">
                                        <div class="hr is-on-white"></div>
                                    </div>
                                </div>
                                <div class="text-small is-bold margin-bottom-quad">Per month</div>
                                <div class="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form">
                                        <input type="submit" value="Join" data-wait="Please wait..." class="button-primary is-fullwidth w-button">
                                    </form>
                                    <div class="success-message w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div class="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-small text-align-center">Free trial for 14 days. <a href="index.html#">Term of service</a></div>
                        </div>
                    </div>
                    <ul class="c-checklist padding-left">
                        <li class="c-checklist_item"><strong>16GB</strong> RAM</li>
                        <li class="c-checklist_item"><strong>8 Core</strong> Processor</li>
                        <li class="c-checklist_item"><strong>512GB</strong> SSD Storage</li>
                        <li class="c-checklist_item"><strong>100TB</strong> Bandwidth</li>
                        <li class="c-checklist_item">Unlimited App’s</li>
                        <li class="c-checklist_item">24×7 Phone Support</li>
                        <li class="c-checklist_item">Free SSL Certificates</li>
                    </ul>
                </div>
                <div class="col lg-4 md-12">
                    <div class="c-pricing h100 margin-bottom-double">
                        <div class="c-pricing__inner h100 flexv-space-between">
                            <div class="c-pricing__top">
                                <div class="flexh-space-between">
                                    <div class="size-h4 margin-bottom">Dedicate cloud</div><img src="images/host-icon-3.svg" width="64" alt="" class="alignself-top"></div>
                                <div class="c-pricing-price2">$97</div>
                                <div class="container container-nested">
                                    <div class="col lg-12 margin-bottom-small">
                                        <div class="hr is-on-white"></div>
                                    </div>
                                </div>
                                <div class="text-small is-bold margin-bottom-quad">Per month</div>
                                <div class="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form">
                                        <input type="submit" value="Join" data-wait="Please wait..." class="button-primary is-fullwidth w-button">
                                    </form>
                                    <div class="success-message w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div class="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-small text-align-center">Free trial for 14 days. <a href="index.html#">Term of service</a></div>
                        </div>
                    </div>
                    <ul class="c-checklist padding-left">
                        <li class="c-checklist_item"><strong>64GB</strong> RAM</li>
                        <li class="c-checklist_item"><strong>32 Core</strong> Processor</li>
                        <li class="c-checklist_item"><strong>10TB</strong> SSD Storage</li>
                        <li class="c-checklist_item"><strong>1000TB</strong> Bandwidth</li>
                        <li class="c-checklist_item">Unlimited App’s</li>
                        <li class="c-checklist_item">24×7 Phone Support</li>
                        <li class="c-checklist_item">Free SSL Certificates</li>
                        <li class="c-checklist_item">Free Cpanel</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section no-padding-top">
            <div class="container is-wide">
                <div class="col lg-12 position-relative">
                    <div class="blockquote-wrapper bg-blockquote position-relative">
                        <blockquote class="quote style6">There doesn’t have to be a connection between the difficulty of your situation and who you are as a person. <span class="is-heading-color">You can choose to remain positive and polite despite of the difficulties you experience</span>. Those difficulties don’t have to influence who you are as a person.</blockquote>
                        <div class="c-quote__marker style2">
                            <div class="quote-mark">“</div>
                        </div>
                        <div class="hr margin-bottom"></div>
                        <div class="text-small">Luxe Apricot
                            <br>Financial Advisor at Suramadu</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section has-bg-accent">
            <div class="container">
                <div class="col lg-12">
                    <div class="w-layout-grid c-grid6x1">
                        <div id="w-node-debad42ac59d-89cce55e" class="text-medium">Big brands and innovative businesses trust superly hosting</div>
                        <div class="fa-brand _70px"></div>
                        <div class="fa-brand _70px"></div>
                        <div class="fa-brand _70px"></div>
                        <div class="fa-brand _70px"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="col block-centered text-align-center lg-5 md-12">
                    <h2>Latest news from blog</h2>
                    <div class="text-medium low-text-contrast">Donec ullamcorper nulla non metus auctor fringilla Cum sociis natoque penatibus et </div>
                </div>
            </div>
            <div class="container is-wide">
                <div class="col lg-12">
                    <div data-animation="slide" data-easing="ease-out-expo" data-duration="900" data-infinite="1" class="c-blogslider w-slider">
                        <div class="w-slider-mask">
                            <div class="c-blogslider__slide w-slide">
                                <div class="container">
                                    <div class="col lg-6 md-12">
                                        <div class="c-gridpost__card style4">
                                            <a href="index.html#" class="c-gridpost__image-bg w-inline-block"></a>
                                            <div class="c-gridpost__category style4"><a href="index.html#" class="c-gridpost__category-link">Design</a> / <a href="index.html#" class="c-gridpost__category-link">Technology</a></div>
                                            <a href="index.html#" class="c-gridpost__clickable style4 w-inline-block">
                                                <div class="c-gridpost__text style2">
                                                    <h3>OpenAI’s Hide-and-Seek the Systems Perspective</h3>
                                                    <div class="flexh-align-center flexh-space-between xs-is-wrapping">
                                                        <div class="flexh-align-center xs-margin-bottom"><img src="images/portrait2.png" width="44" alt="" class="is-rounded margin-right-small">
                                                            <div class="text-small">James Ouya</div>
                                                        </div>
                                                        <div class="text-small low-text-contrast">07 June 2020</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col lg-6 md-12">
                                        <div class="c-gridpost__card style4">
                                            <a href="index.html#" class="c-gridpost__image-bg img2 w-inline-block"></a>
                                            <div class="c-gridpost__category style4"><a href="index.html#" class="c-gridpost__category-link">Design</a> / <a href="index.html#" class="c-gridpost__category-link">Technology</a></div>
                                            <a href="index.html#" class="c-gridpost__clickable style4 w-inline-block">
                                                <div class="c-gridpost__text style2">
                                                    <h3>Generation Z and the environmental impact </h3>
                                                    <div class="flexh-align-center flexh-space-between xs-is-wrapping">
                                                        <div class="flexh-align-center xs-margin-bottom"><img src="images/portrait3.png" width="44" alt="" class="is-rounded margin-right-small">
                                                            <div class="text-small">Oliver Buana</div>
                                                        </div>
                                                        <div class="text-small low-text-contrast">07 June 2020</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="c-blogslider__slide w-slide">
                                <div class="container is-wrapping">
                                    <div class="col lg-6 md-12">
                                        <div class="c-gridpost__card style4">
                                            <a href="index.html#" class="c-gridpost__image-bg img3 w-inline-block"></a>
                                            <div class="c-gridpost__category style4"><a href="index.html#" class="c-gridpost__category-link">Design</a> / <a href="index.html#" class="c-gridpost__category-link">Technology</a></div>
                                            <a href="index.html#" class="c-gridpost__clickable style4 w-inline-block">
                                                <div class="c-gridpost__text style2">
                                                    <h3>Start Learning To Code With Swift Playgrounds</h3>
                                                    <div class="flexh-align-center flexh-space-between xs-is-wrapping">
                                                        <div class="flexh-align-center xs-margin-bottom"><img src="images/portrait4.png" width="44" alt="" class="is-rounded margin-right-small">
                                                            <div class="text-small">Patrick Leeds</div>
                                                        </div>
                                                        <div class="text-small low-text-contrast">07 June 2020</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col lg-6 md-12">
                                        <div class="c-gridpost__card style4">
                                            <a href="index.html#" class="c-gridpost__image-bg img4 w-inline-block"></a>
                                            <div class="c-gridpost__category style4"><a href="index.html#" class="c-gridpost__category-link">Design</a> / <a href="index.html#" class="c-gridpost__category-link">Technology</a></div>
                                            <a href="index.html#" class="c-gridpost__clickable style4 w-inline-block">
                                                <div class="c-gridpost__text style2">
                                                    <h3>How I Put Taxi Drivers in Cuba “Online” Without the Internet</h3>
                                                    <div class="flexh-align-center flexh-space-between xs-is-wrapping">
                                                        <div class="flexh-align-center xs-margin-bottom"><img src="images/portrait1.png" width="44" alt="" class="is-rounded margin-right-small">
                                                            <div class="text-small">Walburn Rick</div>
                                                        </div>
                                                        <div class="text-small low-text-contrast">07 June 2020</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden w-slider-arrow-left">
                            <div class="w-icon-slider-left"></div>
                        </div>
                        <div class="hidden w-slider-arrow-right">
                            <div class="w-icon-slider-right"></div>
                        </div>
                        <div class="c-blogslider__nav w-slider-nav w-slider-nav-invert w-round"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section no-padding-top">
            <div class="container">
                <div class="col block-centered text-align-center lg-6 md-12">
                    <h2>We&#x27;re happy to help</h2>
                    <div class="text-medium low-text-contrast margin-bottom">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet</div>
                </div>
            </div>
            <div class="container">
                <div class="col lg-4 md-12">
                    <div class="c-iconbox"><img src="images/people.svg" width="64" alt="" class="xs-margin-bottom">
                        <div class="margin-left xs-no-margin">
                            <h3>24/7 support</h3>
                            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh</div>
                        </div>
                    </div>
                </div>
                <div class="col lg-4 md-12">
                    <div class="c-iconbox"><img src="images/document_1.svg" width="64" alt="" class="alignself-top xs-margin-bottom">
                        <div class="margin-left xs-no-margin">
                            <h3>Documentation</h3>
                            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh</div>
                        </div>
                    </div>
                </div>
                <div class="col lg-4 md-12">
                    <div class="c-iconbox"><img src="images/icon16.svg" width="64" alt="" class="alignself-top xs-margin-bottom">
                        <div class="margin-left xs-no-margin">
                            <h3>Free domain &amp; SSL</h3>
                            <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-cta position-relative overflow-hidden">
            <div class="container">
                <div class="col block-centered text-align-center lg-6 md-12">
                    <h2 class="on-dark">Get started now.</h2>
                    <div class="on-dark margin-bottom-double">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet</div>
                    <a href="index.html#" class="button-primary is-white w-inline-block">
                        <div class="button-primary-text">create your account</div>
                    </a>
                </div><img src="images/network.svg" alt="" class="block-decoration-1 opacity-20"></div>
        </div>
        <footer class="section padding-bottom-16 is-dark">
            <div class="container flex-horizontal">
                <div class="col lg-3 flexv-space-between md-12 flexv-align-left"><img src="images/-asset-peyton-light.svg" alt="">
                    <div class="footer-tagline margin-bottom">.cloud for developer</div>
                </div>
                <div class="col lg-1 no-margin-bottom"></div>
                <div class="col lg-8 md-12">
                    <div class="container container-nested is-wrapped">
                        <div class="col lg-3 no-margin-bottom-lg md-12">
                            <div class="size-h4 margin-bottom on-dark">Product</div><a href="index.html#" class="footer-nav-link on-dark">Kubernetes</a><a href="index.html#" class="footer-nav-link on-dark">Micro host</a><a href="index.html#" class="footer-nav-link on-dark">Cloud compute</a><a href="index.html#" class="footer-nav-link on-dark">Cloud storage</a><a href="index.html#" class="footer-nav-link on-dark">Dedicate cloud</a></div>
                        <div class="col lg-3 no-margin-bottom-lg md-12">
                            <div class="size-h4 margin-bottom on-dark">Why Superly host</div><a href="index.html#" class="footer-nav-link on-dark">Support experience</a><a href="index.html#" class="footer-nav-link on-dark">Predictable pricing</a><a href="index.html#" class="footer-nav-link on-dark">Global infrastructure</a><a href="index.html#" class="footer-nav-link on-dark">Craft of code</a><a href="index.html#" class="footer-nav-link on-dark">open cloud</a></div>
                        <div class="col lg-3 no-margin-bottom-lg md-12">
                            <div class="size-h4 margin-bottom on-dark">Company</div><a href="index.html#" class="footer-nav-link on-dark">About</a><a href="index.html#" class="footer-nav-link on-dark">Pricing</a><a href="index.html#" class="footer-nav-link on-dark">Career</a><a href="index.html#" class="footer-nav-link on-dark">Leadership</a><a href="index.html#" class="footer-nav-link on-dark">Press</a></div>
                        <div class="col lg-3 no-margin-bottom-lg md-12">
                            <div class="size-h4 margin-bottom on-dark">Let&#x27;s connect</div>
                            <a href="index.html#" class="footer-nav-link on-dark w-inline-block">
                                <div><span class="fa-brand-2 w24"></span> LinkedIn</div>
                            </a>
                            <a href="index.html#" class="footer-nav-link on-dark w-inline-block">
                                <div><span class="fa-brand-2 w24"></span> Youtube</div>
                            </a>
                            <a href="index.html#" class="footer-nav-link on-dark w-inline-block">
                                <div><span class="fa-brand-2 w24"></span> Facebook</div>
                            </a>
                            <a href="index.html#" class="footer-nav-link on-dark w-inline-block">
                                <div><span class="fa-brand-2 w24"></span> Twitter</div>
                            </a>
                            <a href="index.html#" class="footer-nav-link on-dark w-inline-block"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="col lg-12 margin-bottom">
                    <div class="hr on-dark opacity"></div>
                </div>
            </div>
            <div class="container">
                <div class="col lg-6 no-margin-bottom md-12 md-order-last">
                    <div class="low-text-contrast text-small flexh-space-between md-flex-vertical">
                        <div class="md-order-last">©2019 Peyek Beton, Co. All rights reserved. </div><a href="index.html#" class="footer-bottom-link on-dark">Privacy Policy</a><a href="index.html#" class="footer-bottom-link on-dark">Term Of Service</a></div>
                </div>
                <div class="col lg-6 no-margin-bottom md-12">
                    <div class="w100 text-align-right footer-bottom md-text-align-left">Made in Surabaja, Indonesia</div>
                </div>
            </div>
        </footer>
    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/Header.vue'
import Highlights from '@/components/Highlights.vue'
import Intro from '@/components/Intro.vue'

export default {
    components: {
        Header,
        Highlights,
        Intro,
    }
}
</script>

<style>
/*  */
</style>
