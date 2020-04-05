import { FormattedMessage} from 'react-intl';
import React from 'react';

import { Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
export const Bottom_component = (props) => {
 
    return (
     <div className="">
      <Row className="text-center justify-content-center align-items-center">
        <div className=" col-sm-12 col-xl-6">
          <div><Image src="./logo/logo.png" className="logo shadow_custom" fluid/></div>
          <div className=" mt-4">
            <h3>< FormattedMessage id="bottom_heading" defaultMessage="Longchen Technology Co., Ltd. Thailand" /></h3>
            <div className="text-left ml-4 pl-4" style={{borderLeft:"solid red"}}>
            <h5>Tel: +66 (0)38190623</h5>
            <h5>Fax : +66 (0)38190624</h5>
            <h5>Email : longchenthai@hotmail.co.th</h5>
            <h5>< FormattedMessage id="bottom_address" defaultMessage="Address : 52/1 Moo 1 Mapphai, Ban Bueng, Chonburi 20170 Thailand" /></h5>
          </div>
          </div>
          <div></div>
        </div>
        <div className=" col-sm-12 col-xl-6">

            <iframe className="shadow_custom mt-5" frameBorder="0" style={{ width: "100%", height: "400px"}} 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.97206740506!2d101.0925023143996!3d13.3520129906071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d33a21236698d%3A0x2a0341a6483b3dd3!2zTG9uZ2NoZW4gVGVjaG5vbG9neSBDby4sIEx0ZC4gVGhhaWxhbmQg5rOw5Zu96ZqG5oyv56eR5oqA5pyJ6ZmQ5YWs5Y-4IOC4muC4o-C4tOC4qeC4seC4lyDguKvguKXguIcg4LmA4LiI4Li04LmJ4LiZIOC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4tSDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2suk!4v1496621104975">
            </iframe>

        </div>
      </Row>
     </div>
     
    );
  
}

