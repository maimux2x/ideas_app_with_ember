5.times do |n|
  Idea.create!(
    name: "idea#{n}",
    description: "My Idea No.#{n}"
  )
end
