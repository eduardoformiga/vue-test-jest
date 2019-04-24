import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HiChild from "@/components/HiChild.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HiChild.vue", () => {
  it("renders props.message without error when passed > 3 length string", () => {
    const message = "Hello there!";
    const wrapper = shallowMount(HiChild, {
      propsData: { message }
    });
    expect(wrapper.text()).toMatch(message);
  });

  it("renders error when message is too short", () => {
    const message = "Hi";
    const wrapper = shallowMount(HiChild, {
      propsData: { message }
    });
    expect(wrapper.find(".error").exists()).toBe(true);
    wrapper.setProps({ message: "Hello there, good day to see you!" });
    expect(wrapper.find(".error").exists()).toBe(false);
  });
});
