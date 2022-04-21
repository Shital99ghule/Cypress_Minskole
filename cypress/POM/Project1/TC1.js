class TestingPractice{
    shopEl='.menu-item.menu-item-type-post_type.menu-item-object-page a'
homeEl='.woocommerce-breadcrumb a'
sliderEl=".n2-ss-slide-background img"
newArrivelEl='.module.module-text.text-22-sub_row_1-0-1-1-0 >h2'
newArrivelimg='.woocommerce-LoopProduct-link >img'

    clickEl(element,index){
        cy.get(element).eq(index).click()
    }
}
export default TestingPractice