<template>
    <div class="section bg-section position-relative">
        <div class="container">
            <div class="col lg-6 md-12 order-first no-margin-bottom"></div>

            <div class="col lg-1 no-margin-bottom"></div>

            <div class="col lg-5 alignself-center md-12">
                <!-- <h2>Nito Cloud introduces a best-in-class anonymity service for Bitcoin Cash</h2> -->
                <h2>Nito Cloud introduces anonymity-as-a-service for Bitcoin Cash</h2>

                <div class="margin-bottom-double">
                    We mixed the best of <a href="https://cashshuffle.com/" target="blank"><strong>CashShuffle</strong></a> and <a href="https://github.com/cashshuffle/spec/blob/master/CASHFUSION.md" target="_blank"><strong>CashFusion</strong></a>
                    into Nito Cloud, to offer on-the-go users a <strong>premium privacy experience.</strong>
                    You won't have to lift a finger, <a href="https://nito.cash" target="_blank"><strong>Nito Cash app</strong></a> includes everything you need to get started today!
                </div>

                <div class="container container-nested margin-bottom">
                    <div id="counter" class="col lg-6 xs-12">
                        <div class="heading-beta is-xthin">
                            <span data-count="99.9" class="counter-value">2.8</span>
                            <span class="count-label">min</span>
                            <span class="font-size-normal"></span>
                        </div>

                        <div>Avg Shuffle Time</div>
                    </div>

                    <div class="col lg-6 xs-12">
                        <div class="heading-beta is-xthin">
                            <span data-count="600" class="counter-value">2.1</span>
                            <span class="count-label">K coins</span>
                            <span class="font-size-normal"></span>
                        </div>

                        <div>Exchanges (Last 24hrs)</div>
                    </div>
                </div>

                <div class="container container-nested">
                    <div class="col lg-6 xs-12">
                        <div class="heading-beta is-xthin">
                            <span data-count="100" class="counter-value">8.4</span>
                            <span class="count-label">min</span>
                            <span class="font-size-normal"></span>
                        </div>

                        <div>Avg Fusion Time</div>
                    </div>

                    <div class="col lg-6 xs-12">
                        <div class="heading-beta is-xthin">
                            <span data-count="85" class="counter-value">12</span>
                            <span class="count-label">users</span>
                            <span class="font-size-normal"></span>
                        </div>

                        <div>Avg Pool Liquidity</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="c-decoration-left hidden-md">
            <img src="images/isometric-server.jpg" srcset="images/isometric-server-p-1080.jpeg 1080w, images/isometric-server.jpg 1300w" sizes="(max-width: 991px) 100vw, 1040px" alt="" class="c-decoration-left__image">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // msg: String
    }
}
</script>

<style scoped>
.count-label {
    font-size: 0.4em;
}
</style>
