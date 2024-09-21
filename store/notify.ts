import { defineStore } from 'pinia'
import { INotifyType, type INotify, type INotifyStore } from '~/types/stores'

export const useNotify= defineStore({
  id: 'notify',
  state: () => <INotifyStore>({
    notifications: []
   }),
  actions: {
    getNotifications() {
      return this.notifications
    },
    addNotify(notify: INotify) {
      const id = this.notifications.length + 1;
      this.notifications.push({ id: id, ...notify });
      this.delayNotify(id, notify.duration);
    },
    delayNotify(id: number, duration: number) {
      setTimeout(() => {
        this.notifications = this.notifications.filter((notify) => notify.id !== id)
      }, duration)
    }
  }
})
