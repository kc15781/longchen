import React, { Component } from 'react';

import { FormattedMessage} from 'react-intl';

import { Row, Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {Carousel_component} from './shared_components/carousel.component.js'


export default class Home extends Component {
    constructor(props) {
        super(props);

    }




    render() {


        return (
            <div>
                <Container className="bg_color3 px-5 pt-1 pb-5 mt-5 " >
                    <div className="embed-responsive embed-responsive-16by9 mt-5">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/UcZmM48AC5k" allowfullscreen></iframe>
                    </div>
                </Container>

                <Container className="bg_color2 px-5  py-5 mt-5" >
                    
                    <Row>
                        <h1 className="mb-5 col-12" style={{borderBottom:"solid white", textAlign:'center'}}>< FormattedMessage id="History_title" defaultMessage="Our History" /></h1> 
                        <div className="col-auto ml-auto">   
                            <Image src="./pictures/taiwan_mark.png" style={{height:"500px"}} />
                        </div>    
                        <div className="col-auto mr-auto">   
                        
                        
                       <Image src="./pictures/thailand_mark.png" style={{height:"500px"}} />
                          
                        </div>
                       
                        <div className="col-12 mt-5">

                            

                            <p>< FormattedMessage id="intrduction1" defaultMessage="Mr. Chen-I Chu was the president of Chonburi Thai-Taiwan business association for 2 consecutive years and currently the manager of Longchen Technology Co., Ltd. in Thailand, which is affiliated with Longbee Plastic Co., Ltd. in Taiwan wholly-owned by Mr. Longyi Chu." /></p>

                            <p>< FormattedMessage id="intrduction2" defaultMessage="Longbee Plastic Co., Ltd., since its original founding year of 1960, has been challenged by a series of product requirements and designs due to its broad and experienced knowledge in plastic injection moulding. The company is widely known and trusted in this particular specialised field. Mr. Longyi Chu, father of Mr. Chen-I Chu, further excelled in his career by becoming the only president of plastic business association to have taken the position for 2 consecutive years in Hsinchu city, Taiwan whilst no one else has taken it for more than one year." /></p>

                            <p>< FormattedMessage id="intrduction3" defaultMessage="On Mr. Longyi Chu's request, Longbee Plastic Co., Ltd. was set up in Thailand by Mr. Chen-I Chu in 2002. Later in 2014 the company expanded in size and relocated to Chonburi. About the same time it was renamed to Longchen Technology Co., Ltd. and currently the size increased to 35200 m2." /></p>

                            <p>< FormattedMessage id="intrduction4" defaultMessage="Longchen Technology Co., Ltd has superior experience in production of several plastic products, including electronics, automobile components, treadmills, hospital beds and many more. All products produced are either self-designed or patents are bought which legally allow the production. At present, SupaMop is the most famous manufactured product across South-East Asia and Europe. The company's management philosophy is to provide an optimal working environment for the workers up to a degree that the company would be seemingly their home. This is achieved in order to boost the productivity and quality of the products and thus satisfying the customers. The factory has a number of injection presses ranging from 120 to 650 tonnes and in total 30 machines are fully functional." /></p>

                            <p>< FormattedMessage id="intrduction5" defaultMessage="Following Mr. Chen-I Chu's success in business and furthermore due to his altruistic personality he was elected to be the 24th and 25th president of Chonburi Thai-Taiwan business association. Nevertheless, he continued to excel in his career and reputation while he was the president via hosting, organising and promoting several overwhelmingly positive events and also succeeding in several competitions. For example, during sports day 2014, a sports competition between various Thai-Taiwan business associations of different Thai provinces and Chonburi association managed to win the most prizes out of all groups. It was a glorious achievement as it was the first time that Chonburi association achieved a first in sports day." /></p>

                            <p>< FormattedMessage id="intrduction6" defaultMessage="Mr. Chen-I Chu has claimed that it is an honour to be given the chance to develop the family business in Thailand and further enhancing his interest and knowledge of Buddhism in a country where it is widely practiced. Moreover, he strongly believes it is crucial to build a community, in which everyone would love to help each other and he would personally be the role model for it striving to solve problems for all kinds of people within the community." /></p>

                        </div>


                    </Row>
                    



                </Container>


                <div>dsad</div>
                <Carousel_component />

            </div>

        );
    }

}