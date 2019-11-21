class ImageValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors[attribute] << (options[:message] || 'Please check that the image url exists!') unless image_valid?(value)    
  end


  def image_valid?(url)
    url = URI.parse(url)
		http = Net::HTTP.start(url.host, url.port, { use_ssl: (url.scheme == 'https') })

		# confirm content type is image
  	http.head(url.request_uri)['Content-Type'].start_with? 'image'
  end 
end