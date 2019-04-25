require 'selenium-webdriver'
require 'pry'

class FetchUrlJob < ApplicationJob
  queue_as :default

  def perform(url)
  	options = Selenium::WebDriver::Chrome::Options.new
	options.add_argument('--headless')
	driver = Selenium::WebDriver.for :chrome, options: options
	driver.navigate.to "http://news.ycombinator.com"
	element = driver.find_element(xpath: '/html/body')
	puts driver.title
	binding.pry
	driver.quit
  end
end
