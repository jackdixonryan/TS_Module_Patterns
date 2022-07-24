let instance: Singleton; 

class Singleton {
  // removed the instance creation; constructor now checks if the instance exists and throws the error to enforce singularity
  // BUT the instance is not created here, so the module can only be lazily loaded. 
  constructor() {
    if (instance) {
      throw new Error("ALREADY_INSTANTIATED");
    }
  }

  getInstance() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
}

export default Singleton;