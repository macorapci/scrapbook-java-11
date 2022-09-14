---
id: common-annotations-page-id
---

# Common Annotations

## @Override

Overrided methods can apply with `@Override` annotation. If parent class hasn't that signiture, it won't compiled at all.

## @FunctionalInterface

FunctionalInterface interface must have only one `abstract method`. You can warn with this annotation very easily.

## @Deprecated

Sometimes you wanna delete some method from your code. If other develeper using your code, then you can't change very quickly. @Deprecated warns other developers to delete this method or class as soon as possible.

````java

// https://www.baeldung.com/java-deprecated

public class Worker {
    /**
     * Calculate period between versions
     * @deprecated
     * This method is no longer acceptable to compute time between versions.
     * <p> Use {@link Utils#calculatePeriod(Machine)} instead.
     *
     * @param machine instance
     * @return computed time
     */
    @Deprecated(since = "4.5", forRemoval = true)
    public int calculate(Machine machine) {
        return machine.exportVersions().size() * 10;
    }
}

````

## @SuppressWarnings

JVM wants to warn you at some critical point. You can say shut up to JVM with @SuppressWarnings.

````java

public class Machine {
    private List versions;

    // @SuppressWarnings("unchecked")
    @SuppressWarnings({"unchecked", "deprecation"})
    public void addVersion(String version) {
        versions.add(version);
    }
}

````

## @SafeVargs

This is like `@SuppressWarnings`.

````java

public class Machine<T> {
    private List<T> versions = new ArrayList<>();

    @SafeVarargs
    public final void safe(T... toAdd) {
        for (T version : toAdd) {
            versions.add(version);
        }
    }
}

````

## JavaBean Validations
* NotNull
* NotEmpty
* Size
* Max
* Min
* Email 