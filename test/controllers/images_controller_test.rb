require 'test_helper'
require 'mocha/test_unit'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @image = Image.create(url: 'https://image.pbs.org/video-assets/x1WLcZn-asset-mezzanine-16x9-6kkb4dA.jpg')
  end

  test 'should get index' do
    get images_url
    assert_response :success
  end

  test 'should get new' do
    get new_image_url
    assert_response :success
  end

  test 'should create image' do
    assert_difference('Image.count') do
      post images_url, params: { image: { url: @image.url } }
    end
    assert_redirected_to image_url(Image.last)
  end

  test 'should render new if image is invalid' do
    Image.any_instance.stubs(:save).returns(false)

    assert_no_difference('Image.count') do
      post images_url, params: { image: { url: '' } }
    end
    assert_template :new
  end

  test 'should show image' do
    get image_url(@image)
    assert_response :success
  end

  test 'should get edit' do
    get edit_image_url(@image)
    assert_response :success
  end

  test 'should update image' do
    replacement_url = 'https://www.gia.edu/images/polished-emerald-gem.png'
    original_url = @image.url
  
    patch image_url(@image), params: { image: { url: replacement_url } }

    @image = Image.find_by(id: @image.id)

    assert_not_equal(original_url, @image.url)
    assert_equal(replacement_url, @image.url)
    assert_redirected_to image_url(@image)
  end

  test 'should render edit if image is invalid' do
    Image.any_instance.stubs(:update).returns(false)

    assert_no_difference('Image.count') do
      patch image_url(@image), params: { image: { url: '' } }
    end
    assert_template :edit
  end

  test 'should destroy image' do
    assert_difference('Image.count', -1) do
      delete image_url(@image)
    end

    assert_redirected_to images_url
  end
end
