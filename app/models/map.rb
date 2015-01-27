class Map < ActiveRecord::Base
  def self.get_data
    File.read("./app/assets/javascripts/map.json")
  end
end
