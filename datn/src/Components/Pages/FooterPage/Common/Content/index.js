import React, { memo } from 'react';
import { ContentWrapper } from './styled'
function ContentPage(){
    return (
        <div className='col-12 col-lg-9'>
            <ContentWrapper>
                <h3 className='content-title'>
                    Về thương hiệu thời trang Tiền Anh Shop
                </h3>
                <p className='content-date'>
                    13/6/2022
                </p>

                <div className='content-desc'>
                    <p className='content-desc__item'>
                        Ra đời từ 2022, thương hiệu Tiền Anh Shop xác định sứ mệnh giúp các chàng trai trở nên đẹp hơn với phiên bản của chính mình. Ngày nay nam giới trẻ đang đứng những cơ hội tuyệt vời của xã hội hiện đại, công nghệ thông tin phát triển, cuộc cách mạng của các trang mạng xã hội để khẳng định bản thân. Bên cạnh đó, Tiến Anh Shop hiểu rằng người trẻ cũng đang phải đối diện với những áp lực, thử thách thôi thúc bản thân phải thể hiên mình so với những người khác.
                    </p>

                    <p className='content-desc__item'>
                        Với mong muốn được đồng hành, truyền cảm hứng và khuyến khích các bạn nam giới trẻ dám bước ra khỏi vùng an toàn để tự do, tự tin thể hiện chính mình theo phong cách phù hợp với bản thân. Thương hiệu thời trang Tiến Anh Shop đầu tư tâm huyết nghiên cứu thiết kế chi tiết từng sản phẩm để có thể mang lại những trải nghiệm mới cho khách hàng, cũng là thông điệp muốn nhắn nhủ đến các bạn trẻ hãy cho bản thân trải nghiệm, dám thay đổi, bứt phá để vươn lên. Chúng ta chỉ thực sự thay đổi khi chúng ta hành động. Tiến Anh Shop tin rằng dù có thể thành công hay thất bại, nhưng chắc chắn chỉ có những trải nghiệm mới giúp bạn trưởng thành. Trưởng thành là một hành trình với những dấu mốc thanh xuân, để khi nhìn lại tôi và bạn có thể tự tin không phải nuối tiếc “giá như…”
                    </p>

                    <p className='content-desc__item'>
                        Mỗi bạn trẻ là một phiên bản độc đáo và duy nhất.
                    </p>
                </div>

                <h5 className='content-brand'>
                    Tiến Anh Shop
                </h5>
            </ContentWrapper>
        </div>
    )
}

export default memo(ContentPage);
