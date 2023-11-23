import React, {Fragment} from "react";
import PropTypes from "prop-types";


import { formatDistanceToNowStrict } from 'date-fns';
import ruLocale from 'date-fns/locale/ru'


export const Time = ({date}) => 
<Fragment>{formatDistanceToNowStrict(new Date(), {addSufix: true, locale: ruLocale})}</Fragment>




Time.propTypes = {
    date: PropTypes.string
}

export default Time;