import React from 'react';
import { SERVICES_DATA } from '../../../config/HomeConfig/ServicesConfig/config.services';
import { SERVICES_DATA2 } from '../../../config/HomeConfig/ServicesConfig/config.services';
const Services = () => {
    return (
        <section className="services_section py-5 py-lg-none py-md-none py-sm-none">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 card-body service-heading">
                        <h1 className="text-aileron-bold text-insta-regular">
                            Our
                        </h1>
                        <h1 className="text-aileron-bold services-text">
                            Services
                        </h1>
                    </div>

                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-6 ">
                                {SERVICES_DATA.map((elem) => (
                                    <div className="">
                                        <svg
                                            width="50"
                                            height="52"
                                            viewBox="0 0 50 52"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="25"
                                                cy="25"
                                                r="25"
                                                fill="#F4EFF9"
                                            />
                                            <g filter="url(#filter0_bd_128_1118)">
                                                <path
                                                    d="M27.8299 31.5901C29.2414 32.6143 30.1913 34.1544 30.4731 35.8753C30.4807 35.9505 30.5139 36.0208 30.5671 36.0743C30.6204 36.1279 30.6904 36.1616 30.7655 36.1696C30.8131 36.1741 30.8611 36.1682 30.9062 36.1522C30.9513 36.1363 30.9924 36.1107 31.0266 36.0773C31.0659 36.0386 31.0949 35.9907 31.1108 35.9379C31.8495 33.5141 33.064 27.8277 29.3569 25.0175L27.8299 31.5901Z"
                                                    fill="url(#paint0_linear_128_1118)"
                                                />
                                                <path
                                                    d="M30.5726 35.8653L30.5728 35.8653L30.5718 35.8592C30.2894 34.1341 29.3455 32.588 27.9423 31.5484L29.4189 25.1925C31.1444 26.572 31.7357 28.6128 31.8011 30.6259C31.868 32.6859 31.3831 34.7014 31.0152 35.9087L31.0151 35.9089C31.004 35.9457 30.9838 35.9791 30.9564 36.006L31.0266 36.0773L30.9567 36.0058C30.9329 36.0291 30.9043 36.0469 30.8729 36.058L30.9062 36.1522L30.8729 36.058C30.8417 36.069 30.8085 36.0731 30.7756 36.0701C30.7235 36.0644 30.675 36.041 30.6381 36.0038C30.601 35.9665 30.5779 35.9176 30.5726 35.8653Z"
                                                    stroke="url(#paint1_linear_128_1118)"
                                                    stroke-width="0.2"
                                                />
                                            </g>
                                            <g filter="url(#filter1_bd_128_1118)">
                                                <path
                                                    d="M22.532 31.5795C21.1173 32.5992 20.1626 34.1363 19.8755 35.8564C19.8676 35.9316 19.8342 36.0017 19.7808 36.0551C19.7274 36.1085 19.6572 36.142 19.5821 36.1498C19.5345 36.1541 19.4865 36.1481 19.4415 36.132C19.3964 36.1159 19.3554 36.0902 19.3213 36.0567C19.2821 36.0179 19.2533 35.9698 19.2375 35.917C18.5065 33.4909 17.3097 27.8007 21.0256 25.0022L22.532 31.5795Z"
                                                    fill="url(#paint2_linear_128_1118)"
                                                />
                                                <path
                                                    d="M19.776 35.8461L19.7758 35.8461L19.7768 35.84C20.0646 34.1157 21.0133 32.5726 22.4198 31.5375L20.9631 25.177C19.2333 26.5511 18.6356 28.59 18.5639 30.6028C18.4905 32.6627 18.9691 34.6797 19.3333 35.8881L19.3333 35.8883C19.3443 35.9251 19.3644 35.9586 19.3917 35.9856L19.3213 36.0567L19.3915 35.9854C19.4152 36.0087 19.4437 36.0266 19.4751 36.0378L19.4415 36.132L19.4751 36.0378C19.5062 36.0489 19.5394 36.0532 19.5724 36.0503C19.6244 36.0447 19.673 36.0215 19.7101 35.9844C19.7473 35.9472 19.7706 35.8984 19.776 35.8461Z"
                                                    stroke="url(#paint3_linear_128_1118)"
                                                    stroke-width="0.2"
                                                />
                                            </g>
                                            <g filter="url(#filter2_bd_128_1118)">
                                                <mask
                                                    id="path-6-inside-1_128_1118"
                                                    fill="white"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M24.9998 13.2085C25.0719 13.2085 25.1421 13.2313 25.2004 13.2736C26.4752 14.3495 27.5575 15.6345 28.401 17.0736L21.6252 17.0373C22.4617 15.6115 23.535 14.3387 24.7992 13.2736C24.8575 13.2313 24.9277 13.2085 24.9998 13.2085ZM19.8925 25.2896L21.8457 33.7696C21.8629 33.8451 21.9053 33.9126 21.9659 33.9609C22.0266 34.0093 22.1018 34.0355 22.1793 34.0355L27.8165 34.0355C27.8617 34.0359 27.9066 34.0274 27.9485 34.0104C27.9904 33.9934 28.0285 33.9682 28.0607 33.9364C28.1065 33.891 28.1377 33.8329 28.1501 33.7696L30.1057 25.2582C30.4764 22.6782 30.0149 20.0473 28.7883 17.7475L21.239 17.7161C19.9936 20.0323 19.5218 22.6861 19.8925 25.2896Z"
                                                    />
                                                </mask>
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M24.9998 13.2085C25.0719 13.2085 25.1421 13.2313 25.2004 13.2736C26.4752 14.3495 27.5575 15.6345 28.401 17.0736L21.6252 17.0373C22.4617 15.6115 23.535 14.3387 24.7992 13.2736C24.8575 13.2313 24.9277 13.2085 24.9998 13.2085ZM19.8925 25.2896L21.8457 33.7696C21.8629 33.8451 21.9053 33.9126 21.9659 33.9609C22.0266 34.0093 22.1018 34.0355 22.1793 34.0355L27.8165 34.0355C27.8617 34.0359 27.9066 34.0274 27.9485 34.0104C27.9904 33.9934 28.0285 33.9682 28.0607 33.9364C28.1065 33.891 28.1377 33.8329 28.1501 33.7696L30.1057 25.2582C30.4764 22.6782 30.0149 20.0473 28.7883 17.7475L21.239 17.7161C19.9936 20.0323 19.5218 22.6861 19.8925 25.2896Z"
                                                    fill="url(#paint4_linear_128_1118)"
                                                />
                                                <path
                                                    d="M25.2004 13.2736L25.3294 13.1207L25.3238 13.116L25.3178 13.1116L25.2004 13.2736ZM24.9998 13.2085L24.9998 13.0085L24.9998 13.0085L24.9998 13.2085ZM28.401 17.0736L28.3999 17.2736L28.7511 17.2755L28.5735 16.9725L28.401 17.0736ZM21.6252 17.0373L21.4527 16.9361L21.2771 17.2355L21.6242 17.2373L21.6252 17.0373ZM24.7992 13.2736L24.6818 13.1116L24.6759 13.1159L24.6703 13.1206L24.7992 13.2736ZM21.8457 33.7696L22.0407 33.7251L22.0406 33.7247L21.8457 33.7696ZM19.8925 25.2896L19.6945 25.3178L19.6957 25.3262L19.6976 25.3345L19.8925 25.2896ZM21.9659 33.9609L21.8413 34.1173L21.8413 34.1173L21.9659 33.9609ZM22.1793 34.0355L22.1793 33.8355L22.1791 33.8355L22.1793 34.0355ZM27.8165 34.0355L27.8185 33.8355L27.8165 33.8355L27.8165 34.0355ZM28.0607 33.9364L27.92 33.7941L27.9198 33.7944L28.0607 33.9364ZM28.1501 33.7696L27.9551 33.7248L27.9538 33.7311L28.1501 33.7696ZM30.1057 25.2582L30.3006 25.303L30.3025 25.2948L30.3037 25.2866L30.1057 25.2582ZM28.7883 17.7475L28.9647 17.6534L28.9085 17.548L28.7891 17.5475L28.7883 17.7475ZM21.239 17.7161L21.2398 17.5161L21.1197 17.5156L21.0628 17.6214L21.239 17.7161ZM25.3178 13.1116C25.2253 13.0446 25.114 13.0085 24.9998 13.0085L24.9998 13.4085C25.0297 13.4085 25.0589 13.4179 25.0831 13.4355L25.3178 13.1116ZM28.5735 16.9725C27.7185 15.5138 26.6215 14.2113 25.3294 13.1207L25.0714 13.4264C26.3288 14.4877 27.3964 15.7552 28.2284 17.1747L28.5735 16.9725ZM21.6242 17.2373L28.3999 17.2736L28.4021 16.8736L21.6263 16.8373L21.6242 17.2373ZM24.6703 13.1206C23.3888 14.2004 22.3007 15.4907 21.4527 16.9361L21.7977 17.1385C22.6227 15.7323 23.6813 14.477 24.928 13.4265L24.6703 13.1206ZM24.9998 13.0085C24.8856 13.0085 24.7743 13.0446 24.6818 13.1116L24.9166 13.4355C24.9408 13.4179 24.9699 13.4085 24.9998 13.4085L24.9998 13.0085ZM22.0406 33.7247L20.0874 25.2447L19.6976 25.3345L21.6508 33.8145L22.0406 33.7247ZM22.0906 33.8045C22.0655 33.7845 22.0479 33.7565 22.0407 33.7251L21.6507 33.814C21.678 33.9338 21.7452 34.0408 21.8413 34.1173L22.0906 33.8045ZM22.1791 33.8355C22.147 33.8355 22.1158 33.8246 22.0906 33.8045L21.8413 34.1173C21.9374 34.1939 22.0566 34.2356 22.1795 34.2355L22.1791 33.8355ZM27.8165 33.8355L22.1793 33.8355L22.1793 34.2355L27.8165 34.2355L27.8165 33.8355ZM27.8733 33.8251C27.8559 33.8321 27.8373 33.8357 27.8185 33.8355L27.8145 34.2355C27.8862 34.2362 27.9573 34.2227 28.0237 34.1957L27.8733 33.8251ZM27.9198 33.7944C27.9065 33.8076 27.8907 33.818 27.8733 33.8251L28.0237 34.1957C28.0902 34.1687 28.1506 34.1289 28.2015 34.0784L27.9198 33.7944ZM27.9538 33.7311C27.9491 33.7551 27.9374 33.777 27.92 33.7941L28.2013 34.0786C28.2757 34.005 28.3263 33.9107 28.3464 33.808L27.9538 33.7311ZM29.9108 25.2134L27.9552 33.7248L28.345 33.8144L30.3006 25.303L29.9108 25.2134ZM28.6118 17.8417C29.8184 20.1039 30.2724 22.6919 29.9077 25.2297L30.3037 25.2866C30.6804 22.6646 30.2114 19.9907 28.9647 17.6534L28.6118 17.8417ZM21.2381 17.9161L28.7874 17.9475L28.7891 17.5475L21.2398 17.5161L21.2381 17.9161ZM20.0905 25.2614C19.7258 22.7002 20.19 20.0894 21.4151 17.8108L21.0628 17.6214C19.7973 19.9752 19.3178 22.672 19.6945 25.3178L20.0905 25.2614Z"
                                                    fill="url(#paint5_linear_128_1118)"
                                                    mask="url(#path-6-inside-1_128_1118)"
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_bd_128_1118"
                                                    x="12.8301"
                                                    y="10.0176"
                                                    width="34.0771"
                                                    height="41.1543"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                                >
                                                    <feFlood
                                                        flood-opacity="0"
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feGaussianBlur
                                                        in="BackgroundImage"
                                                        stdDeviation="7.5"
                                                    />
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_128_1118"
                                                    />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"
                                                    />
                                                    <feOffset dx="5" dy="5" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0.485284 0 0 0 0 0.110185 0 0 0 0 0.991667 0 0 0 0.59 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="effect1_backgroundBlur_128_1118"
                                                        result="effect2_dropShadow_128_1118"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect2_dropShadow_128_1118"
                                                        result="shape"
                                                    />
                                                </filter>
                                                <filter
                                                    id="filter1_bd_128_1118"
                                                    x="3.45654"
                                                    y="10.002"
                                                    width="34.0757"
                                                    height="41.1484"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                                >
                                                    <feFlood
                                                        flood-opacity="0"
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feGaussianBlur
                                                        in="BackgroundImage"
                                                        stdDeviation="7.5"
                                                    />
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_128_1118"
                                                    />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"
                                                    />
                                                    <feOffset dx="5" dy="5" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0.485284 0 0 0 0 0.110185 0 0 0 0 0.991667 0 0 0 0.59 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="effect1_backgroundBlur_128_1118"
                                                        result="effect2_dropShadow_128_1118"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect2_dropShadow_128_1118"
                                                        result="shape"
                                                    />
                                                </filter>
                                                <filter
                                                    id="filter2_bd_128_1118"
                                                    x="4.76953"
                                                    y="-1.79102"
                                                    width="40.4609"
                                                    height="50.8262"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                                >
                                                    <feFlood
                                                        flood-opacity="0"
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feGaussianBlur
                                                        in="BackgroundImage"
                                                        stdDeviation="7.5"
                                                    />
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_128_1118"
                                                    />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"
                                                    />
                                                    <feOffset dx="5" dy="5" />
                                                    <feGaussianBlur stdDeviation="5" />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0.485284 0 0 0 0 0.110185 0 0 0 0 0.991667 0 0 0 0.25 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="effect1_backgroundBlur_128_1118"
                                                        result="effect2_dropShadow_128_1118"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect2_dropShadow_128_1118"
                                                        result="shape"
                                                    />
                                                </filter>
                                                <linearGradient
                                                    id="paint0_linear_128_1118"
                                                    x1="30.1953"
                                                    y1="26.4811"
                                                    x2="24.8056"
                                                    y2="32.115"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#6814E2" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#8125E2"
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint1_linear_128_1118"
                                                    x1="27.1052"
                                                    y1="31.5218"
                                                    x2="31.3359"
                                                    y2="27.3533"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="white" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="white"
                                                        stop-opacity="0"
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint2_linear_128_1118"
                                                    x1="20.1826"
                                                    y1="26.4631"
                                                    x2="25.5547"
                                                    y2="32.1139"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#6814E2" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#8125E2"
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint3_linear_128_1118"
                                                    x1="23.2569"
                                                    y1="31.5135"
                                                    x2="19.0393"
                                                    y2="27.3317"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="white" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="white"
                                                        stop-opacity="0"
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint4_linear_128_1118"
                                                    x1="26.3156"
                                                    y1="16.0162"
                                                    x2="13.3851"
                                                    y2="29.8183"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#6814E2" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#8125E2"
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint5_linear_128_1118"
                                                    x1="18.3179"
                                                    y1="27.7307"
                                                    x2="28.5633"
                                                    y2="17.5977"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="white" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="white"
                                                        stop-opacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <div class="card-body">
                                            <h4 className="text-insta-regular lh-sm font-weight-bold">
                                                {elem.heading}
                                            </h4>
                                            <p className="statsNames font-insta-regular">
                                                {elem.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6">
                                {SERVICES_DATA2.map((elem) => (
                                    <div className="">
                                        <img
                                            class="ml-md-3"
                                            src={elem.image}
                                            alt="Card image cap"
                                            widht="50"
                                            height="52"
                                        />
                                        <div class="card-body">
                                            <h4 className="text-insta-regular lh-sm font-weight-bold">
                                                {elem.heading}
                                            </h4>
                                            <p className="statsNames font-insta-regular">
                                                {elem.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
