# TestContainers. To the rescue in a massive legacy system migration

<style>
  .back-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>

<button class="back-button" onclick="window.location.href='https://matiaspakua.github.io/tech.notes.io'">All notes</button>

## Table of content

## Introduction


## Example Configuration

```java
@ContextConfiguration(classes = {AppConfig.class}, loader = AnnotationConfigContextLoader.class)
public abstract class StaticContainerInstantiation {

    protected static PostgreSQLContainer postgreSQLContainer;
    //protected static OracleContainer oracleContainer;
    //protected static MSSQLServerContainer mssqlServerContainer;
    private static final AtomicBoolean initDB = new AtomicBoolean(false);

    @AfterClass
    public static void teardown() {
        System.out.println("teardown");
        postgreSQLContainer.stop();
        //oracleContainer.stop();
        //mssqlServerContainer.stop();
    }


    static {
        Consumer<CreateContainerCmd> consumer = new Consumer<CreateContainerCmd>() {
            @Override
            public void accept(CreateContainerCmd createContainerCmd) {
                createContainerCmd.withHostConfig(
                        new HostConfig().withPortBindings(
                                new PortBinding(Ports.Binding.bindPort(57156), new ExposedPort(5432)    // binding Postgres
                                        // new PortBinding(Ports.Binding.bindPort(57156), new ExposedPort(1521)    // binding Oracle
                                        //new PortBinding(Ports.Binding.bindPort(57156), new ExposedPort(1433)    // binding MSSQL
                                )
                        )
                );
            }
        };


        postgreSQLContainer = (PostgreSQLContainer) new PostgreSQLContainer("postgres:13.4")
                .withDatabaseName("dbExample")
                .withUsername("dbUser")
                .withPassword("dbPassword")
                .withInitScript("postgres/setup.sql")
                .withExposedPorts(5432)
                .withReuse(true)
                .withCreateContainerCmdModifier(consumer);


        if (initDB.get() == false) {
            postgreSQLContainer.start();
            // oracleContainer.start();
            //mssqlServerContainer.start();
            initDB.set(true);
        }

        /*
        oracleContainer = (OracleContainer) new OracleContainer("gvenzl/oracle-xe:18.4.0-slim")
                .withDatabaseName("dbExample")
                .withUsername("dbUser")
                .withPassword("dbPassword")
                .withInitScript("oracle/setup.sql")
                .withExposedPorts(1521)
                .withCreateContainerCmdModifier(consumer)
                .withReuse(true);

        mssqlServerContainer = (MSSQLServerContainer) new MSSQLServerContainer<>("mcr.microsoft.com/mssql/server:2017-latest")
                .withEnv("ACCEPT_EULA", "Y")
                .withEnv("MSSQL_PID", "Express")
                .withEnv("SA_PASSWORD", "dbPassword")
                .withInitScript("mssql/setup.sql")
                .withExposedPorts(1433)
                .withCreateContainerCmdModifier(consumer)
                .withReuse(true);

         */
    }
}
```

## Example Test usage

```java
@RunWith(SpringJUnit4ClassRunner.class)
public class ExampleTest extends StaticContainerInstantiation {
    @Autowired
    TestRepository testRepository;

    @Before
    public void cleanTable() {
        this.testRepository.deleteAll();
    }

    @Test
    public void given_NewApiKeyToSave_when_Save_then_ApiKeySaved_Ok() {

        ApiKey apiKey = new ApiKey();
        apiKey.setApiKey("key");
        apiKey.setApiKeyName("system");

        testRepository.save(apiKey);
        Assert.assertTrue(apiKey.getId() != 0);
    }
  }
```

## References

 - Official web: https://www.testcontainers.org/ 
 - A talk to open you mind: (https://www.youtube.com/live/v3eQCIWLYOw?feature=share)
 - Anothe talk with examples: (https://www.youtube.com/watch?v=XTVONNebJvQ)
