import { Button } from "antd";

const TopBtn = (pluginProvider, modalService,messageService)=>{
  return (
    <Button style={{backgroundColor:'pink'}} onClick={()=>{
      modalService.confirm({title:'Text',content:'Are you sure?', onOk: async () => {
      await pluginProvider.fetchData('profile/permission/system',{method:'GET'}).then((resp) => {
        console.log(resp)
        messageService.success('http request success')
        
      }).catch(() => {
        messageService.error('http request failed')
      })
      return true
    }})}} >{pluginProvider.$t('点击')}</Button>
  )
}


export function bootstrap({
    pluginEventHub,
    pluginSlotHub,
    pluginProvider,
    modalService,
    messageService}){
  // Listen for HTTP responses
  pluginEventHub.on?.('httpResponse',  (data) => {
      console.log('data received by plugin:',data)
        data.data.passThrough = 'remote';
    return { data, continue: true };
  });

  // Add a button to the 'basicLayoutAfterBtns' slot
  pluginSlotHub.addSlot('basicLayoutAfterBtns',TopBtn(pluginProvider, modalService,messageService));
    };