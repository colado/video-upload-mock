# Notes on implementation
The instructions stated that it was not necessary to complete the task 100%, so I have prioritized functionality rather than UI. Some parts of the design, like the Add video page, is pretty much bare-bones, but it works as intended. I have also used in-line styles rather than css files for simplicity.

Some parts of the requirements were not 100% clear, such as this part: "With the biggest format selected we then form the label as "format_name res". So for this particular example, the generated label should be "two 720p" (The format name is "two", and its res is "720p")." Not sure where that logic would go, as another part of the instructions state that the .json file should not be changed. For simplicity's sake I refactored the getter in a way that the component expects it.

Because of time constraints the Edit video page is not implemented. I don't think this should be a problem, since it is not expected to be 100% complete and the rest of the code will hopefully be enough to evaluate code ability.
