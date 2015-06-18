//Pseudo Code
//Make method that adds the sums of different length of array.
//Name the method "total".


def total(array)
 sum = array.inject do |a,b| a + b 
 end
end

puts([])


//refactor

def total(array)
 sum = array.inject {|a,b| a + b} 
 end

puts total([])



//Pseudo Code
//Make a method that takes a array parameter and return a sentence. 
//Name the method sentence_maker


def sentence_maker(array)
    sentence = array.join(" ")
    (sentence + ".").capitalize
end

puts sentence_maker(["i","like","pizza"])


//refactor

def sentence_maker(array)
    (array.join(" ") + (".")).capitalize
end

puts sentence_maker(["i","like","pizza"])


# reflection
# I got back the feeling of writing in Ruby!
# In this challenge I got familiar with inject method and join method.
# Overall I had really much fun working with Andra! She knew something I did not know and so did I.
# I think we did pretty much a good collaboration.





