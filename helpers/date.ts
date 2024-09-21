import dayjs, { locale } from "dayjs"
import relative from 'dayjs/plugin/relativeTime.js'
import localePl from "dayjs/locale/pl.js"
import localizedFormat from 'dayjs/plugin/localizedFormat.js'

dayjs.extend(relative);
dayjs.extend(localizedFormat)
dayjs.locale(localePl);

export const dateFromNow = (date: string) => {
    const now = dayjs();

    if(now.diff(dayjs(date), 'day') > 7) return dayjs(date).format('lll');
    
    return dayjs(date).fromNow();
}