import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

/*Pipes*/
import { CapitalizePipe } from './pipes/capitalize.pipe';
/*End Pipes*/


@NgModule({
  declarations: [// directive, pipe sẽ để ở đây
  	CapitalizePipe
  ],
  imports: [// chỉ cần import khi mà module này có component sử dụng module ko thì thôi
    //CommonModule
  ],
  exports: [
  CapitalizePipe,
  CommonModule,// cái này export để cho các module khác xài, module này ko xài nên export là đc, ko cần import
  FormsModule// như trên
  ]// export thì module khác mới dùng đc
})
export class SharedModule { }
